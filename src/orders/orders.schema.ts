/* eslint-disable prettier/prettier */
import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument, Types } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;
@Schema({
  toJSON: { virtuals: true },
})
export class Order {
  @Prop({ type: [Types.ObjectId], ref: 'Dish' })
  // dishes: [{ quantity: number; price: number; dishId: number }];
  dishes: Types.ObjectId[];

  @Prop({ type: [] })
  quantity: [];

  @Prop({ type: Number })
  tableNumber: number;

  @Prop()
  orderTotalPrice: number;

  @Prop()
  creationDate: Date;

  @Prop()
  deliveryDate: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
