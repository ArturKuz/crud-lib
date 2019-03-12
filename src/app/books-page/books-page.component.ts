import { Book } from './../books/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../books/book';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.less']
})
export class BooksPageComponent implements OnInit {

  books: Book[];
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {

    this.getBooks();
  }


  onSelect(book: Book): void {
    this.selectedBook = book;
  }


  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }

  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.bookService.addBook({ title } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }
  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book).subscribe();
  }

}
