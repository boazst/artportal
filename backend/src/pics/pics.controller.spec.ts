import { Test, TestingModule } from '@nestjs/testing';
import { PicsController } from './pics.controller';

describe('Pics Controller', () => {
  let controller: PicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PicsController],
    }).compile();

    controller = module.get<PicsController>(PicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
