import { Module } from '@nestjs/common';
import { ObjectEntity } from 'src/entities/object.entity';
import { UserModule } from 'src/user/user.module';
import { ObjectController } from './object.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectService } from './object.service';

@Module({
  controllers: [ObjectController],
  imports: [TypeOrmModule.forFeature([ObjectEntity]), UserModule],
  exports: [TypeOrmModule, ObjectService],
  providers: [ObjectService],
})
export class ObjectModule {}
