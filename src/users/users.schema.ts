import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  UserId: number;
}

export const UserSchema = SchemaFactory.createForClass(Users);
