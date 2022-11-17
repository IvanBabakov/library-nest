import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksMongoDbController } from './books-mongo-db.controller';
import { BooksMongoDbService } from './books-mongo-db.service';

import { BookSchema, Book } from './schema/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BooksMongoDbController],
  providers: [BooksMongoDbService],
  exports: [BooksMongoDbService],
})
export class BooksMongoDbModule {}
