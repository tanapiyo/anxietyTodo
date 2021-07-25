import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectEntity } from 'src/entities/object.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ObjectService {
  constructor(
    @InjectRepository(ObjectEntity)
    private readonly objectEntityRepository: Repository<ObjectEntity>,
    private userService: UserService,
  ) {}

  async getList(userId: number): Promise<ObjectEntity[]> {
    const objects = await this.objectEntityRepository.find({
      user: { id: userId },
    });
    return objects;
  }

  async post(userId: number, content: string): Promise<void> {
    const user = await this.userService.getUserFromId(userId);
    if (user) {
      const object = this.objectEntityRepository.create({
        content: content,
        createdAt: new Date(),
        user: user,
      });
      await this.objectEntityRepository.save(object);
    }
  }

  async edit(id: number, content: string): Promise<void> {
    const object = await this.objectEntityRepository.findOne(id);
    const updateData = Object.assign(object, { content: content });
    await this.objectEntityRepository.save(updateData);
  }

  async delete(id: number): Promise<void> {
    await this.objectEntityRepository.delete(id);
  }
}
