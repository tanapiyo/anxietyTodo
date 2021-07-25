import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { IsDate } from 'class-validator';
import { UserEntity } from './user.entity';
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
  @Column({ type: 'datetime' })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.object)
  @JoinColumn({ name: 'userId' })
  readonly user?: UserEntity;

  @ManyToOne(() => ObjectEntity, (object) => object.habit)
  @JoinColumn({ name: 'objectId' })
  readonly object?: ObjectEntity;
}
