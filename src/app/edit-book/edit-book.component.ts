import { Book } from './../books/book';
import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less']
})
export class EditBookComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router,
    private location: Location) { }


  ngOnInit() {
    let bookId = this.route.snapshot.paramMap.get('id');
    if(!bookId) {
      alert("Invalid action.");
      this.router.navigate(['books']);
      return;
      }

    this.editForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      author: ['', Validators.required],
      language: ['', Validators.required],
      country: [],
      imageLink: [],
      link: [],
      pages: [],
      year: []
    });

    this.bookService.getBook(+bookId)
      .subscribe(data => {
      this.editForm.setValue(data);
      });
  }
  onSubmit() {
    this.bookService.updateBook(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['books']);
        },
        error => {
          alert(error);
        });
  }
  goBack(): void {
    this.location.back();
  }
}

