import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnxietyController } from './anxiety/anxiety.controller';
import { AnxietyService } from './anxiety/anxiety.service';
import { AnxietyModule } from './anxiety/anxiety.module';

@Module({
  imports: [AnxietyModule],
  controllers: [AppController, AnxietyController],
  providers: [AppService, AnxietyService],
})
export class AppModule {}
