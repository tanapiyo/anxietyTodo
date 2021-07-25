import { IsInt, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  userId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  objectId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  content: string;
}

export class GetOHabitDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  userId: number;
}

export class DeleteHabitDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  id: number;
}

export class EditHabitDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  id: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  content: string;
}
