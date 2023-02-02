import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { BooksMongoDbController } from './books-mongo-db.controller';
import { BooksMongoDbService } from './books-mongo-db.service';
import { Book } from './schema/book.schema';

describe('BooksMongoDbController', () => {
  let controller: BooksMongoDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksMongoDbService,
        {
          provide: getModelToken(Book.name),
          useValue: jest.fn(),
        },
      ],
      controllers: [BooksMongoDbController],
    }).compile();

    controller = module.get<BooksMongoDbController>(BooksMongoDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
