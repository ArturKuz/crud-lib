import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../books/book';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.less']
})
export class BooksPageComponent implements OnInit {

  books : Book[];
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    
    this.getBooks();    
  }
  

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }

}