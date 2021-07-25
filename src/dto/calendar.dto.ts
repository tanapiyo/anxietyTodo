import { IsInt, IsString, IsBoolean, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCalendarDTO {
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
  dayOfWeek: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    type: Boolean,
  })
  didIt: boolean;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  row: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  page: number;
}

export class GetCalendarDTO {
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
  page: number;
}

export class DeleteCalendarDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  id: number;
}

export class EditCalendarDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  id: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    type: Boolean,
  })
  didIt: boolean;
}
