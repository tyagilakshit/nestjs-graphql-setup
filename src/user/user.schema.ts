import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type UserDocument = User & mongoose.Document;

@Schema()
@ObjectType()
export class User {
    @Field(() => ID)
    _id: string;

    @Prop({ required: true, unique: false })
    @Field()
    name: string;

    @Prop({ required: true, unique: false })
    @Field()
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
