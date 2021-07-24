import { Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getUserList() {
    return this.service.getUserList();
  }

  @Post()
  addUser(@Query() query: { name: string; password: string }) {
    return this.service.addUser(query.name, query.password);
  }
}
