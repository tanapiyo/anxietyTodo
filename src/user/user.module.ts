import { Module } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
})
export class UserModule {}
