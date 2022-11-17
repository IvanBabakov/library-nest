import { Injectable } from '@nestjs/common';

@Injectable({})
export class BooksService {
  create(book) {
    const allBooks = JSON.parse(sessionStorage.getItem('books'));
    allBooks.push(book);
    sessionStorage.setItem('books', JSON.stringify(allBooks));

    return { msg: 'Your book added' };
  }

  getBooks() {
    const allBooks = JSON.parse(sessionStorage.getItem('books'));
    return { allBooks };
  }

  getBook(id) {
    const book = JSON.parse(sessionStorage.getItem('books'))[id];
    return { book };
  }

  updateBook(id, changes: any) {
    const allBooks = JSON.parse(sessionStorage.getItem('books'));
    const book = allBooks[id];

    Object.keys(book).forEach((key) => {
      if (changes[key] !== '') {
        book[key] = changes[key];
      }
    });

    allBooks[id] = book;

    sessionStorage.setItem('books', JSON.stringify(allBooks));

    return { msg: 'Your book was chenge' };
  }

  deleteBook(id) {
    sessionStorage.getItem('books');
    return { msg: 'Books was deletsed' };
  }
}
