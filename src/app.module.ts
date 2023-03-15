import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { DishesModule } from './dishes/dishes.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'

dotenv.config();




@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.mongo_connection,
    ),
    OrdersModule, DishesModule],
  controllers: [],
  providers: [],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
