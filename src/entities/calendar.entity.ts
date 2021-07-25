import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsDate, IsInt, IsBoolean } from 'class-validator';
import { UserEntity } from './user.entity';

@Entity('calendar')
export class CalendarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  content: string;

  @IsInt()
  @Column({ type: 'int', nullable: false })
  dayOfWeek: number;

  @IsBoolean()
  @Column()
  didIt: boolean;

  @IsInt()
  @Column()
  row: number;

  @IsInt()
  @Column()
  page: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.calendar)
  @JoinColumn({ name: 'userId' })
  readonly user?: UserEntity;
}
