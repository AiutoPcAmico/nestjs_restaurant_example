import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dish } from './entities/dish.entity';
import { DishSchema } from './dishes.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      "qui_mongo",
    ),
    MongooseModule.forFeature([{ name: Dish.name, schema: DishSchema }]),
  ],
  controllers: [DishesController, DishesController],
  providers: [DishesService],
})
// eslint-disable-next-line prettier/prettier
export class DishesModule { }
