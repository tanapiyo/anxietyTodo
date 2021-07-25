import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnxietyController } from './anxiety/anxiety.controller';
import { AnxietyService } from './anxiety/anxiety.service';
import { AnxietyModule } from './anxiety/anxiety.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ObjectController } from './object/object.controller';
import { ObjectService } from './object/object.service';
import { ObjectModule } from './object/object.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AnxietyModule, UserModule, AuthModule, ObjectModule],
  controllers: [AppController, AnxietyController, UserController, ObjectController],
  providers: [AppService, AnxietyService, UserService, ObjectService],
})
export class AppModule {}
