import { Args, Query, Mutation, Resolver } from "@nestjs/graphql";
import { addUserInput } from "src/book/dto/add-book.dto";
import { User } from "./user.schema";
import { UserService } from './user.service';
@Resolver()
export class UserResolver {
    constructor(private userService: UserService) { }

    @Query(() => [User])
    async users() {
        return this.userService.getAll();
    }

    @Mutation(() => User)
    async addUsers(@Args("input") input: addUserInput) {
        const user = await this.userService.createUsers(input);
        return user;
    }
}

