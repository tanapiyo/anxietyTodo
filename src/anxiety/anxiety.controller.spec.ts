import { Test, TestingModule } from '@nestjs/testing';
import { AnxietyController } from './anxiety.controller';

describe('AnxietyController', () => {
  let controller: AnxietyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnxietyController],
    }).compile();

    controller = module.get<AnxietyController>(AnxietyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
