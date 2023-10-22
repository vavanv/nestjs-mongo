import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Document<Product>;

@Schema()
export class Product {
  @Prop()
  title: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
