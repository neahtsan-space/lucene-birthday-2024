import { Test, TestingModule } from '@nestjs/testing';
import { WishCardService } from './wish-card.service';

describe('WishCardService', () => {
  let service: WishCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishCardService],
    }).compile();

    service = module.get<WishCardService>(WishCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
