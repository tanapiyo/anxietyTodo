import { IsInt, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateObjectDTO {
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
  anxietyId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  content: string;
}

export class GetObjectDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  userId: number;
}

export class DeleteObjectDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  id: number;
}

export class EditObjectDTO {
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
