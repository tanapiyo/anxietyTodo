import { Module } from '@nestjs/common';
import { HabitEntity } from 'src/entities/habit.entity';
import { UserModule } from 'src/user/user.module';
import { HabitController } from 'src/habit/habit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitService } from './habit.service';

@Module({
  controllers: [HabitController],
  imports: [TypeOrmModule.forFeature([HabitEntity]), UserModule],
  exports: [TypeOrmModule, HabitService],
  providers: [HabitService],
})
export class HabitModule {}
