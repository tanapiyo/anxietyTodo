import { UseGuards } from '@nestjs/common';
import { Controller, Get, Post, Query, Patch, Delete } from '@nestjs/common';
import { AnxietyService } from './anxiety.service';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
import {
  CreateAnxietyDTO,
  GetAnxietyDTO,
  DeleteAnxietyDTO,
  EditAnxietyDTO,
} from 'src/dto/anxiety.dto';
import { Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { AnxietyEntity } from 'src/entities/anxiety.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('anxiety')
export class AnxietyController {
  constructor(private readonly anxietyService: AnxietyService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAnxiety(@Query() query: GetAnxietyDTO): Promise<AnxietyEntity[]> {
    return this.anxietyService.getAnxietyList(query.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: [CreateAnxietyDTO] })
  @Post()
  postAnxiety(@Body() body: CreateAnxietyDTO): void {
    this.anxietyService.postAnxiety(body.userId, body.content);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  EditAnxiety(@Body() body: EditAnxietyDTO): void {
    this.anxietyService.editAnxiety(body.id, body.content);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  DeleteAnxiety(@Body() body: DeleteAnxietyDTO): void {
    this.anxietyService.deleteAnxiety(body.id);
  }
}
