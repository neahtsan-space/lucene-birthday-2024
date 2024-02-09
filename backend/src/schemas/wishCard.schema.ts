import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type wishCardDocument = HydratedDocument<wishCard>;

@Schema()
export class wishCard{
    @Prop()
    name: string;

    @Prop()
    wish: string;

    @Prop()
    time: string;

    @Prop()
    picture: string;

    @Prop()
    cardNumber: number;

    @Prop()
    borderColor: string;
}

export const wishCardSchema = SchemaFactory.createForClass(wishCard);