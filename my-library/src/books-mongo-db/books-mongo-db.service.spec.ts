import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { BooksMongoDbController } from './books-mongo-db.controller';
import { BooksMongoDbService } from './books-mongo-db.service';
import { Book } from './schema/book.schema';

describe('BooksMongoDbService', () => {
  let service: BooksMongoDbService;

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

    service = await module.resolve<BooksMongoDbService>(BooksMongoDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createBook', () => {
    it('should return the saved book', async () => {
      const book = { title: 'Foret', authors: 'Withdom' };
      const createdBook = await service.createBook(book);
      expect(createdBook.title).toBe(book.title);
    });
  });
});
