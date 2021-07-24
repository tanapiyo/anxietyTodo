import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { IsDate } from 'class-validator';
import { UserEntity } from './user.entity';
import { AnxietyEntity } from './anxiety.entity';
import { ObjectEntity } from './object.entity';

@Entity('habit')
export class HabitEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  content: string;

  @IsDate()
  @Column({ type: 'datetime', nullable: false })
  createdAt: Date;

  @IsDate()
  @Column({ type: 'datetime', nullable: false })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.object)
  readonly user?: UserEntity;

  @ManyToOne(() => ObjectEntity, (object) => object.habit)
  readonly object?: ObjectEntity;
}
