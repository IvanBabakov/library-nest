import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksMongoDbModule } from './books-mongo-db/books-mongo-db.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_COLLECTION),
    BooksMongoDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
