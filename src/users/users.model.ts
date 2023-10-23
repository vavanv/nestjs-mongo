import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type UserDocument = Document<User>;

@Schema()
export class User {
  @IsString()
  @IsNotEmpty()
  @Prop({ type: String, required: true })
  name: string;

  @IsString()
  @IsEmail()
  @Prop({ type: String, required: true })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
