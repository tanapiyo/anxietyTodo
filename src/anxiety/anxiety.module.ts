import { Module } from '@nestjs/common';
import { AnxietyEntity } from 'src/entities/anxiety.entity';
import { AnxietyService } from './anxiety.service';
import { AnxietyController } from './anxiety.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
@Module({
  controllers: [AnxietyController],
  imports: [TypeOrmModule.forFeature([AnxietyEntity]), UserModule],
  exports: [TypeOrmModule, AnxietyService],
  providers: [AnxietyService],
})
export class AnxietyModule {}
