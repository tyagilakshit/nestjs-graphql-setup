import { Args, Query, Mutation, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { BookService } from "./book.service";
import { addBookInput } from "./dto/add-book.dto";
import { BasicResponce } from "./dto/types/response";
@Resolver()
export class BookResolver {
    constructor(private bookService: BookService) { }
    @Query(() => [Book])
    async books() {
        return this.bookService.getAll();
    }

    @Query(() => String)
    async test() {
        return "hello"
    }

    @Mutation(() => BasicResponce)
    async createBook(@Args("input") input: addBookInput) {
        await this.bookService.addBook(input);
        return { success: "ok", message: "created" }
    }

}
