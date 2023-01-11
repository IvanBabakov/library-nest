import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksMongoDbModule } from 'src/books-mongo-db/books-mongo-db.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_COLLECTION),
    BooksMongoDbModule,
  ],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
