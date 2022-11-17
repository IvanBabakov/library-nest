import { Test, TestingModule } from '@nestjs/testing';
import { BooksMongoDbController } from './books-mongo-db.controller';

describe('BooksMongoDbController', () => {
  let controller: BooksMongoDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksMongoDbController],
    }).compile();

    controller = module.get<BooksMongoDbController>(BooksMongoDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
