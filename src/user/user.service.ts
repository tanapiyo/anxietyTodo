import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
  ) {}

  addUser(name: string, password: string) {
    const user = new UserEntity();
    user.name = name;
    user.password = password;
    return this.userEntityRepository.insert(user);
  }

  getUserList() {
    return this.userEntityRepository.find();
  }
}
