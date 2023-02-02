import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksMongoDbModule } from './books-mongo-db/books-mongo-db.module';

@Module({
  imports: [BooksMongoDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
