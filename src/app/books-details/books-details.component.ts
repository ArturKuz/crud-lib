import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../books/book';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.less']
})
export class BooksDetailsComponent implements OnInit {
  
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
