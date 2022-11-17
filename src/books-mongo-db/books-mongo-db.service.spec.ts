import { Test, TestingModule } from '@nestjs/testing';
import { BooksMongoDbService } from './books-mongo-db.service';

describe('BooksMongoDbService', () => {
  let service: BooksMongoDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksMongoDbService],
    }).compile();

    service = module.get<BooksMongoDbService>(BooksMongoDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
