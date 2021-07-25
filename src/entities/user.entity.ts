import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AnxietyEntity } from './anxiety.entity';
import { MaxLength } from 'class-validator';
import { ObjectEntity } from './object.entity';
import { HabitEntity } from './habit.entity';
import { CalendarEntity } from './calendar.entity';

@Entity('user')
// @Unique(["name"])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  @MaxLength(100)
  name: string;

  @Column('text')
  @Column({ type: 'text', nullable: false })
  password: string;

  @OneToMany(() => AnxietyEntity, (anxiety) => anxiety.user)
  anxiety?: AnxietyEntity[];

  @OneToMany(() => ObjectEntity, (object) => object.user)
  object?: ObjectEntity[];

  @OneToMany(() => HabitEntity, (habit) => habit.user)
  habit?: HabitEntity[];

  @OneToMany(() => CalendarEntity, (calendar) => calendar.user)
  calendar?: CalendarEntity[];
}
