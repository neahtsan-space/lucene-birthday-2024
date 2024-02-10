import { Test, TestingModule } from '@nestjs/testing';
import { WishCardController } from './wish-card.controller';

describe('WishCardController', () => {
  let controller: WishCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishCardController],
    }).compile();

    controller = module.get<WishCardController>(WishCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
