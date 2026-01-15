import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class ArrFromUser {
  @IsArray()
  @IsNotEmpty()
  purchases: [ItemFromUser];
}

export class ItemFromUser {
  @IsNumber()
  @IsNotEmpty()
  id?: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  type: string;
  @IsNumber()
  @IsNotEmpty()
  pricePerUnit: number;
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
  @IsBoolean()
  @IsNotEmpty()
  hasImage: boolean;
}
