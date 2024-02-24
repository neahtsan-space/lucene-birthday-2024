import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { WishCardModule } from './wish-card/wish-card.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_URI), WishCardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
