import { BadRequestException, Body, Controller, Get, Post, Param, Put, Query, Delete } from '@nestjs/common';
import { WishCardService } from './wish-card.service';
import { wishCardDto } from './wish-card.dto';

@Controller('wish-card')
export class WishCardController {
    constructor(private readonly wishCardService: WishCardService) {}
     
    @Get()
    async getAllWishCards() {
        return await this.wishCardService.getAllWishCards();
    }

    @Post('new')
    async new(
        @Body() wishCard: wishCardDto) {
            try 
            {
                return await this.wishCardService.createWishCard(wishCard);
            } 
            catch (e) 
            {
                throw new BadRequestException(e.message);
            }
        }

    @Get('lastest-four')
    async getLastestFour() {
        return await this.wishCardService.getLastestFour();
    }

    @Get('search')
    async getWishCardByName(@Query('name') name: string) {
        try 
        {
            return await this.wishCardService.getWishCardByName(name);
        } 
        catch (e) 
        {
            throw new BadRequestException(e.message);
        }
    }

    @Put('update')
    async updateWishCardByName(@Body('name') name: string, @Body('wish') wish: string) {
        try 
        {
            return await this.wishCardService.updateWishCardByName(name, wish);
        } 
        catch (e) 
        {
            throw new BadRequestException(e.message);
        }
    }

    @Delete('delete')
    async deleteWishCardByName(@Body('name') name: string) {
        try 
        {
            return await this.wishCardService.deleteWishCardByName(name);
        } 
        catch (e) 
        {
            throw new BadRequestException(e.message);
        }
    }

    @Delete('nuclear-option')
    async deleteAllWishCards() {
        try 
        {
            return await this.wishCardService.deleteAllWishCards();
        } 
        catch (e) 
        {
            throw new BadRequestException(e.message);
        }
    }

    @Get('slang-check')
    async getSlangCheck() {
        try 
        {
            return await this.wishCardService.getSlangCheck();
        } 
        catch (e) 
        {
            throw new BadRequestException(e.message);
        }
    }

}
