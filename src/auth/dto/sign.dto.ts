import {
  IsEmail,
  IsEnum,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(255, { message: 'Email is too long' })
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(2, { message: 'Name is too short (minimum 2 characters)' })
  @MaxLength(30, { message: 'Name is too long (maximum 30 characters)' })
  name: string;

  @IsEnum(['lite', 'standart'], {
    message: 'Mode bust be either lite or standart',
  })
  mode: 'lite' | 'standart';
}

export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
