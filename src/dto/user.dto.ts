import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  password: string;
}

export class GetUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
  })
  name: string;
}
