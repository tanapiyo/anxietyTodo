import { UseGuards } from '@nestjs/common';
import { Controller, Get, Post, Query, Patch, Delete } from '@nestjs/common';
import { ObjectService } from './object.service';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
import {
  CreateObjectDTO,
  GetObjectDTO,
  DeleteObjectDTO,
  EditObjectDTO,
} from 'src/dto/object.dto';
import { Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ObjectEntity } from 'src/entities/object.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('object')
export class ObjectController {
  constructor(private readonly objectService: ObjectService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getObject(@Query() query: GetObjectDTO): Promise<ObjectEntity[]> {
    return this.objectService.getList(query.userId);
  }

  // @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: [CreateObjectDTO] })
  @Post()
  postObject(@Body() body: CreateObjectDTO): void {
    this.objectService.post(body.userId, body.content);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Patch()
  editObject(@Body() body: EditObjectDTO): void {
    this.objectService.edit(body.id, body.content);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete()
  deleteObject(@Body() body: DeleteObjectDTO): void {
    this.objectService.delete(body.id);
  }
}
