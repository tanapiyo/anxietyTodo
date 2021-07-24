import { Injectable } from '@nestjs/common';

@Injectable()
export class AnxietyService {
  getTest(): string {
    return 'hi';
  }
}
