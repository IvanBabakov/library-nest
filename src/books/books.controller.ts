import { Controller, Delete, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Post()
  createBook(book) {
    this.booksService.create(book);
  }

  @Get()
  getBooks() {
    this.booksService.getBooks();
  }

  @Get()
  getBook(id) {
    this.booksService.getBook(id);
  }

  @Get()
  updateBook(id, chenges) {
    this.booksService.updateBook(id, chenges);
  }

  @Delete()
  deleteBook(id) {
    this.booksService.deleteBook(id);
  }
}
