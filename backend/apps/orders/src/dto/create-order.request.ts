import { IsNotEmpty, IsPositive, IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  price: number;

  @IsEmail()
  email: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  pictureUrl: string;
}