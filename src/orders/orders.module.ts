import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './orders.schema';
import { Dish, DishSchema } from 'src/dishes/dishes.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'quimongostring',
    ),
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: Dish.name, schema: DishSchema },
    ]),
  ],
  controllers: [OrdersController, OrdersController],
  providers: [OrdersService],
})

// eslint-disable-next-line prettier/prettier
export class OrdersModule { }
