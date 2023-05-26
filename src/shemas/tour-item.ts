import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ITourClient } from "../interfaces/tour";

export type TourItemDocument = HydratedDocument<TourItem>;

@Schema()
export class TourItem implements ITourClient {
  @Prop() name: string;

  @Prop() description: string;

  @Prop() tourOperator: string;

  @Prop() price: string;

  @Prop() img: string;

}

export const TourItemSchema = SchemaFactory.createForClass(TourItem);