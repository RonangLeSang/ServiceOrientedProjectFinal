import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class Order extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  email: string;

  @Prop()
  description: string;

  @Prop()
  pictureUrl: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
