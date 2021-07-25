import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HabitEntity } from 'src/entities/habit.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class HabitService {
  constructor(
    @InjectRepository(HabitEntity)
    private readonly habitEntityRepository: Repository<HabitEntity>,
    private userService: UserService,
  ) {}

  async getList(userId: number): Promise<HabitEntity[]> {
    const habits = await this.habitEntityRepository.find({
      user: { id: userId },
    });
    return habits;
  }

  async post(userId: number, content: string): Promise<void> {
    const user = await this.userService.getUserFromId(userId);
    if (user) {
      const habit = this.habitEntityRepository.create({
        content: content,
        createdAt: new Date(),
        user: user,
      });
      await this.habitEntityRepository.save(habit);
    }
  }

  async edit(id: number, content: string): Promise<void> {
    const habit = await this.habitEntityRepository.findOne(id);
    const updateData = Object.assign(habit, { content: content });
    await this.habitEntityRepository.save(updateData);
  }

  async delete(id: number): Promise<void> {
    await this.habitEntityRepository.delete(id);
  }
}
