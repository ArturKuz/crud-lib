import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../books/book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.less']
})
export class BooksDetailsComponent implements OnInit {

  @Input() book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

    ngOnInit(): void {
      this.getBook();
    }

    getBook(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.bookService.getBook(id)
        .subscribe(book => this.book = book);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      this.bookService.updateBook(this.book)
        .subscribe(() => this.goBack());
    }

}
