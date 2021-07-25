import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, GetUserDTO } from '../dto/user.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  // @Get()
  // getUserList() {
  //   return this.service.getUserList();
  // }

  @Get()
  getUser(@Query() query: GetUserDTO) {
    return this.service.getUser(query.name);
  }

  //sign up
  @Post()
  @ApiBody({ type: [CreateUserDTO] })
  addUser(@Body() body: CreateUserDTO) {
    return this.service.addUser(body.name, body.password);
  }
}
