import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksMongoDbController } from './books-mongo-db.controller';
import { BooksMongoDbService } from './books-mongo-db.service';

import { BookSchema, Book } from './schema/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_COLLECTION),
  ],
  controllers: [BooksMongoDbController],
  providers: [BooksMongoDbService],
  exports: [BooksMongoDbService],
})
export class BooksMongoDbModule {}
