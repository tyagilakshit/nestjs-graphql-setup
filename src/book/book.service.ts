import { Injectable } from '@nestjs/common';
import { addBookInput } from './dto/add-book.dto';

@Injectable()
export class BookService {
    private books: { _id: number, name: string }[] = [
        { _id: 1, name: "Do it Today" },
        { _id: 2, name: "Rich dad poor dad" },
        { _id: 3, name: "Why not me" },
        { _id: 4, name: "Leader without a title" }
    ];
    async getAll() {
        return this.books;
    }

    async addBook(data: addBookInput) {
        this.books.push(data)
        return { success: "ok", message: "created" };
    }
}
