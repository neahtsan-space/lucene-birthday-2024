import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    methods: 'GET,HEAD,POST,OPTIONS',
    credentials: false,
  });

  await app.listen(3080);
  Logger.log('Running on port 3080', 'NestApplication');
}

bootstrap();