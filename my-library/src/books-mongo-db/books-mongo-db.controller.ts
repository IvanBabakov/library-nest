/* eslint-disable @typescript-eslint/ban-types */
import { Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { HydratedDocument, QueryWithHelpers } from 'mongoose';
import { BooksMongoDbService } from './books-mongo-db.service';
import { CreateBookDto } from './interfaces/dto/create-book';
import { UpdateBookDto } from './interfaces/dto/update-book';
import { ParamId } from './interfaces/param-id';
import { BookDocument } from './schema/book.schema';

@Controller('books-mongo-db')
export class BooksMongoDbController {
  constructor(private readonly bookService: BooksMongoDbService) {}

  @Post()
  public create(@Body() body: CreateBookDto): Promise<BookDocument> {
    return this.bookService.createBook(body);
  }

  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  public getBook(
    @Param() { id }: ParamId,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.bookService.getBook(id);
  }

  @Put(':id')
  public update(
    @Param() { id }: ParamId,
    @Body() body: UpdateBookDto,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.bookService.updateBook(id, body);
  }

  @Delete(':id')
  public delete(
    @Param() { id }: ParamId,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.bookService.deleteBook(id);
  }
}
