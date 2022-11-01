import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type BookDocument = Book & mongoose.Document;

@Schema()
@ObjectType()
export class Book {
    @Field(() => ID)
    _id: string;

    @Prop({ required: true, unique: false })
    @Field()
    name: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
