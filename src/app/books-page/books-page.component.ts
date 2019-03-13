
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../books/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.less']
})
export class BooksPageComponent implements OnInit {

  books: Book[];
  selectedBook: Book;

  constructor(private bookService: BookService, private formBuilder: FormBuilder) { }

  // addForm: FormGroup;
  // btnvisibility = true;

  ngOnInit() {

    this.getBooks();

    // this.addForm = this.formBuilder.group({
    //   id: [],
    //   b_title: ['', Validators.required],
    //   b_author: ['', [Validators.required, Validators.maxLength(10)]],
    //   b_lahg: ['', [Validators.required, Validators.maxLength(10)]]
    // });
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
