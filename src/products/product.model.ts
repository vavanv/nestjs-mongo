import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type ProductDocument = Document<Product>;

@Schema({
  validateBeforeSave: true,
})
export class Product {
  @IsString()
  @IsNotEmpty()
  @Prop({ type: String, required: true })
  title: string;

  @IsString()
  @IsNotEmpty()
  @Prop({ type: String, required: true })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Prop({ type: Number, required: true })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
