import { IsInt, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnxietyDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  userId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  content: string;
}

export class GetAnxietyDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  userId: number;
}

export class DeleteAnxietyDTO {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
  })
  id: number;
}

export class EditAnxietyDTO {
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
