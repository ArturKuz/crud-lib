import { Book } from './../books/book';
import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.less']
})
export class EditBookComponent implements OnInit {

  book: Book;
  editForm: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router) { }


    ngOnInit() {
      let bookId = window.localStorage.getItem('editBookId');
      if (!bookId) {
        alert('Invalid action.'),
        this.router.navigate(['books']);
        return;
      }
      this.editForm = this.formBuilder.group({
        id: [''],
        b_title: ['', Validators.required],
        b_author: ['', Validators.required],
        b_lang: ['', Validators.required],
      });
      this.bookService.getBook(+bookId);
      // НЕ известно что писать
      // .subscribe( data => {
      //   this.editForm.setValue(data.result);
      // });
          // console.log( bookId);
          // console.log( book.id);
          // console.log( bookId.title);
    }

// НЕ понятно после второй строки
        onSubmit() {
          this.bookService.updateBook(this.editForm.value)
            .pipe(first())
            .subscribe(
              data => {
                if (data.status === 200) {
                  alert('User updated successfully.');
                  this.router.navigate(['list-user']);
                } else {
                  alert(data.message);
                }
              },
              error => {
                alert(error);
              });
        }

}

