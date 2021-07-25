import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CalendarEntity } from 'src/entities/calendar.entity';
import { UserService } from 'src/user/user.service';
import { CreateCalendarDTO } from 'src/dto/calendar.dto';

@Injectable()
export class CalendarService {
  constructor(
    @InjectRepository(CalendarEntity)
    private readonly calendarEntityRepository: Repository<CalendarEntity>,
    private userService: UserService,
  ) {}

  async getList(userId: number, page: number): Promise<CalendarEntity[]> {
    const calendars = await this.calendarEntityRepository.find({
      user: { id: userId },
      page: page,
    });
    return calendars;
  }

  async post(body: CreateCalendarDTO): Promise<void> {
    const user = await this.userService.getUserFromId(body.userId);
    if (user) {
      const calendar = this.calendarEntityRepository.create({
        dayOfWeek: body.dayOfWeek,
        didIt: body.didIt,
        row: body.row,
        page: body.page,
        createdAt: new Date(),
        user: user,
      });
      await this.calendarEntityRepository.save(calendar);
    }
  }

  async edit(id: number, didIt: boolean): Promise<void> {
    const calendar = await this.calendarEntityRepository.findOne(id);
    const updateData = Object.assign(calendar, { didIt: didIt });
    await this.calendarEntityRepository.save(updateData);
  }

  async delete(id: number): Promise<void> {
    await this.calendarEntityRepository.delete(id);
  }
}
