import { Controller, Get } from '@nestjs/common';
import { AnxietyService } from './anxiety.service';

@Controller('anxiety')
export class AnxietyController {
  constructor(private readonly anxietyService: AnxietyService) {}

  @Get()
  getTest(): string {
    return this.anxietyService.getTest();
  }
}
