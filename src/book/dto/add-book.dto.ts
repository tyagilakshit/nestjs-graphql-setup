import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class addBookInput {
    @Field()
    _id: number;

    @Field()
    name: string;
}

@InputType()
export class addUserInput {
    @Field()
    name: string;

    @Field()
    email: string
}