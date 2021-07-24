import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { IsDate } from 'class-validator';
import { UserEntity } from './user.entity';
import { ObjectEntity } from './object.entity';

@Entity('anxiety')
export class AnxietyEntity {
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

  @ManyToOne(() => UserEntity, (user) => user.anxiety)
  readonly user?: UserEntity;

  @OneToMany(() => ObjectEntity, (object) => object.anxiety)
  object?: ObjectEntity[];
}
