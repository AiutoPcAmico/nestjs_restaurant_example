/* eslint-disable prettier/prettier */
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type DishDocument = HydratedDocument<Dish>;
@Schema()
export class Dish {
  @Prop()
  descrizione: string;

  @Prop()
  price: number;
}

export const DishSchema = SchemaFactory.createForClass(Dish);
