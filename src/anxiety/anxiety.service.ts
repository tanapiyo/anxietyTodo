import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AnxietyEntity } from 'src/entities/anxiety.entity';
import { UserService } from 'src/user/user.service';
@Injectable()
export class AnxietyService {
  constructor(
    @InjectRepository(AnxietyEntity)
    private readonly anxietyEntityRepository: Repository<AnxietyEntity>,
    private userService: UserService,
  ) {}

  async getAnxietyList(userId: number): Promise<AnxietyEntity[]> {
    const anxieties = await this.anxietyEntityRepository.find({
      user: { id: userId },
    });
    return anxieties;
  }

  async postAnxiety(userId: number, content: string): Promise<void> {
    const user = await this.userService.getUserFromId(userId);
    if (user) {
      const anxiety = this.anxietyEntityRepository.create({
        content: content,
        createdAt: new Date(),
        user: user,
      });
      await this.anxietyEntityRepository.save(anxiety);
    }
  }

  async editAnxiety(id: number, content: string): Promise<void> {
    const anxiety = await this.anxietyEntityRepository.findOne(id);
    const updateData = Object.assign(anxiety, { content: content });
    await this.anxietyEntityRepository.save(updateData);
  }

  async deleteAnxiety(id: number): Promise<void> {
    await this.anxietyEntityRepository.delete(id);
  }
}
