import { UseGuards } from '@nestjs/common';
import { Controller, Get, Post, Query, Patch, Delete } from '@nestjs/common';
import { HabitService } from './habit.service';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
import {
  CreateHabitDTO,
  GetOHabitDTO,
  DeleteHabitDTO,
  EditHabitDTO,
} from 'src/dto/habit.dto';
import { Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { HabitEntity } from 'src/entities/habit.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getObject(@Query() query: GetOHabitDTO): Promise<HabitEntity[]> {
    return this.habitService.getList(query.userId);
  }

  // @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: [CreateHabitDTO] })
  @Post()
  postObject(@Body() body: CreateHabitDTO): void {
    this.habitService.post(body.userId, body.content);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Patch()
  editObject(@Body() body: EditHabitDTO): void {
    this.habitService.edit(body.id, body.content);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete()
  deleteObject(@Body() body: DeleteHabitDTO): void {
    this.habitService.delete(body.id);
  }
}
