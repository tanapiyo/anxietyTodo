import { UseGuards } from '@nestjs/common';
import { Controller, Get, Post, Query, Patch, Delete } from '@nestjs/common';
import { CalendarService } from './calendar.service';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
import {
  CreateCalendarDTO,
  GetCalendarDTO,
  DeleteCalendarDTO,
  EditCalendarDTO,
} from 'src/dto/calendar.dto';
import { Body } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CalendarEntity } from 'src/entities/calendar.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getObject(@Query() query: GetCalendarDTO): Promise<CalendarEntity[]> {
    return this.calendarService.getList(query.userId, query.page);
  }

  // @UseGuards(AuthGuard('jwt'))
  @ApiBody({ type: [CreateCalendarDTO] })
  @Post()
  postObject(@Body() body: CreateCalendarDTO): void {
    this.calendarService.post(body);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Patch()
  editObject(@Body() body: EditCalendarDTO): void {
    this.calendarService.edit(body.id, body.didIt);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete()
  deleteObject(@Body() body: DeleteCalendarDTO): void {
    this.calendarService.delete(body.id);
  }
}
