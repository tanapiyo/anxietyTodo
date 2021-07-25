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
import { HabitController } from './habit/habit.controller';
import { HabitService } from './habit/habit.service';
import { HabitModule } from './habit/habit.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AnxietyModule, UserModule, AuthModule, ObjectModule, HabitModule],
  controllers: [AppController, AnxietyController, UserController, ObjectController, HabitController],
  providers: [AppService, AnxietyService, UserService, ObjectService, HabitService],
})
export class AppModule {}
