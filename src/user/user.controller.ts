import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getUserList() {
    return this.service.getUserList();
  }

  @Get()
  getUser(name: string) {
    return this.service.getUser(name);
  }

  @Post()
  addUser(@Body() body: CreateUserDTO) {
    return this.service.addUser(body.name, body.password);
  }
}
