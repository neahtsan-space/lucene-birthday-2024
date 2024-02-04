import { BadRequestException, Body, Controller, Get, Post, Param } from '@nestjs/common';
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
}
