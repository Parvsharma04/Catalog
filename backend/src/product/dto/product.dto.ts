import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  userId: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  category: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  Price: number;
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  qty: number;
}
