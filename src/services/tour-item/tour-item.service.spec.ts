import { Test, TestingModule } from '@nestjs/testing';
import { TourItemService } from './tour-item.service';

describe('TourItemService', () => {
  let service: TourItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TourItemService],
    }).compile();

    service = module.get<TourItemService>(TourItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
