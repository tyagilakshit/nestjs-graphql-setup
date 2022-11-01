import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BasicResponce {
    @Field()
    success: string;
    @Field({ nullable: true })
    message?: string;
}
