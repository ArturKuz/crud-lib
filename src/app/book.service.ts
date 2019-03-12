import { Injectable } from '@angular/core';
import { BOOKS } from './books/mock-books';
import { Book } from './books/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return BOOKS;
  }
}
