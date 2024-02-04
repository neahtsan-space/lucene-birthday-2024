import { Module } from '@nestjs/common';
import { WishCardController } from './wish-card.controller';
import { WishCardService } from './wish-card.service';
import { MongooseModule } from '@nestjs/mongoose';
import { wishCard, wishCardSchema } from 'src/schemas/wishCard.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: wishCard.name, schema: wishCardSchema }]),
    ConfigModule
  ],
  controllers: [WishCardController],
  providers: [WishCardService]
})
export class WishCardModule {}
