import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { wishCard } from 'src/schemas/wishCard.schema';
import { wishCardDto } from './wish-card.dto';


@Injectable()
export class WishCardService {
    constructor(@InjectModel(wishCard.name) private wishCardModel: Model<wishCard>) {}

    async createWishCard(wishCard: wishCardDto): Promise<wishCard> {
        const createdWishCard = new this.wishCardModel(wishCard);
        return createdWishCard.save();
    }

    async getAllWishCards() {
        return this.wishCardModel.find().exec();
    }

    async getWishCardByName(name: string) {
        const searchDbResult = await this.wishCardModel.findOne({name: name}).exec()
        if (searchDbResult == null){
            throw new BadRequestException('No wish card found with the given name')
        }
        return searchDbResult;
    }
}
