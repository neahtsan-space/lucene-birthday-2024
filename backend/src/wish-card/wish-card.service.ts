import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { wishCard } from 'src/schemas/wishCard.schema';
import { wishCardDto } from './wish-card.dto';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class WishCardService {
    constructor(@InjectModel(wishCard.name) private wishCardModel: Model<wishCard>) {}

    async loadSlangWords() {
            try {
                const absolutePath = path.isAbsolute('slang.json');
                const srcPath = absolutePath ? '' : 'src';
                const slangPath = path.join(srcPath,'slang-detector-ds' ,'slang.json');
                const data = await fs.readFile(slangPath, 'utf8');
                const slangWords = JSON.parse(data);
                return slangWords;
            } catch (error) {
                console.error('Failed to load slang words:', error);
            }
        }
    
    async containsSlang(message: string): Promise<boolean> {
        const slangWords = await this.loadSlangWords();
        return slangWords.some(slang => message.includes(slang));
    }

    formatDateTime(date: Date): string {
        const pad = (num: number) => num.toString().padStart(2, '0');
      
        // Assuming the server is in GMT+7
        const offset = 7; // GMT+7
        const localDate = new Date(date.getTime() + offset * 3600 * 1000);
      
        const day = pad(localDate.getUTCDate());
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[localDate.getUTCMonth()];
        const year = localDate.getUTCFullYear();
        const hour = pad(localDate.getUTCHours());
        const minute = pad(localDate.getUTCMinutes());
      
        return `${day} ${month} ${year} ${hour}:${minute} GMT+7`;
    }

    async getWishCardCount() {
        return this.wishCardModel.countDocuments().exec();
    }

    async checkNameExists(name: string) {
        const searchDbResult = await this.wishCardModel.findOne({name: name}).exec()
        if (searchDbResult == null){
            return false;
        }
        return true;
    }

    async createWishCard(wishCard: wishCardDto): Promise<wishCard> {
        //check if the picture and border color number is valid
        if (parseInt(wishCard.picture) > 16){
            throw new BadRequestException(`Invalid picture number, please choose a number between 1-16 / หมายเลขรูปภาพไม่ถูกต้อง โปรดเลือกหมายเลขระหว่าง 1-4 ครับ~, ${wishCard.picture}`)
        }
        const searchDbResult = await this.checkNameExists(wishCard.name);
        if (searchDbResult){
            throw new BadRequestException('Wish card with the given name already exists, please write another name / มีคนใช้ชื่อนี้ส่งการ์ดอวยพรแล้วครับ โปรดตั้งชื่อใหม่นะครับ~')
        }
        wishCard.time = this.formatDateTime(new Date());
        wishCard.cardNumber = await this.getWishCardCount() + 1;
        const createdWishCard = new this.wishCardModel(wishCard);
        return createdWishCard.save();
    }

    async getAllWishCards() {
        return this.wishCardModel.find().exec();
    }

    async getSlangCheck(){
        const all_wish_cards = await this.getAllWishCards();
        const slang_words_owner = [];
        
        for (let i = 0; i < all_wish_cards.length; i++){
            if (await this.containsSlang(all_wish_cards[i].wish)){
                slang_words_owner.push({name: all_wish_cards[i].name, wish: all_wish_cards[i].wish});
            }
        }
        if (slang_words_owner.length == 0){
            throw new BadRequestException('No slang words found in the wish cards')
        }
        return {statuscode: 200, message: 'Slang words found in the following wish cards:', data: slang_words_owner}
    }

    async getWishCardByName(name: string) {
        const searchDbResult = await this.wishCardModel.findOne({name: name}).exec();
        if (searchDbResult == null){
            throw new BadRequestException('No wish card found with the given name')
        }
        return searchDbResult;
    }

    async updateWishCardByName(name: string, wish: string) {
        const searchDbResult = await this.getWishCardByName(name);
        if (searchDbResult == null){
            throw new BadRequestException('No wish card found with the given name')
        }
        const time = this.formatDateTime(new Date());
        return this.wishCardModel.updateOne({name: name}, {wish: wish, time: time}).exec();
    }

    async deleteWishCardByName(name: string) {
        const searchDbResult = await this.getWishCardByName(name);
        
        await this.wishCardModel.deleteOne({name: name}).exec();

        const cardNumberToDelete = searchDbResult.cardNumber;
        await this.wishCardModel.updateMany(
            { cardNumber: { $gt: cardNumberToDelete } },
            { $inc: { cardNumber: -1 } }
          ).exec();
        return {statuscode: 200, message: 'Wish card deleted successfully & Update the rest of the card number successfully!'}
    }

    async deleteAllWishCards() {
        return this.wishCardModel.deleteMany({}).exec();
    }

}
