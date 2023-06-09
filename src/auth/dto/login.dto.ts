import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
