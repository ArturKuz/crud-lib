
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../books/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.less']
})
export class BooksPageComponent implements OnInit {
  showBtn = false;
  books: Book[];
  selectedBook: Book;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  // addForm: FormGroup;
  // btnvisibility = true;

  ngOnInit() {

    this.getBooks();

    let role = localStorage.getItem('currentUser');
    if (role=="Admin") {
      this.showBtn = true;
    }
  }



  getBooks(): void {
    this.bookService.getBooks()
        .subscribe(books => this.books = books);
  }


  // add(title: string): void {
  //   title = title.trim();
  //   if (!title) { return; }
  //   this.bookService.addBook({ title } as Book)
  //     .subscribe(book => {
  //       this.books.push(book);
  //     });
  // }
  add(): void {
    this.router.navigate(['add-book']);
  }

  delete(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book).subscribe();
  }
}
