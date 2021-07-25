import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsDate } from 'class-validator';
import { UserEntity } from './user.entity';
import { AnxietyEntity } from './anxiety.entity';
import { HabitEntity } from './habit.entity';

@Entity('object')
export class ObjectEntity {
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

  @ManyToOne(() => UserEntity, (anxiety) => anxiety.object)
  @JoinColumn({ name: 'anxietyId' })
  readonly anxiety?: AnxietyEntity;

  @OneToMany(() => HabitEntity, (habit) => habit.object)
  habit?: HabitEntity[];
}
