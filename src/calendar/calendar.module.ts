import { Module } from '@nestjs/common';
import { CalendarEntity } from 'src/entities/calendar.entity';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CalendarController],
  imports: [TypeOrmModule.forFeature([CalendarEntity]), UserModule],
  exports: [TypeOrmModule, CalendarService],
  providers: [CalendarService],
})
export class CalendarModule {}
