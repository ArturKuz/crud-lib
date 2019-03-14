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

  editForm: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit() {
      // нужно ли window??
    let bookId = window.localStorage.getItem("editBookId");
    if(!bookId) {
      alert("Invalid action.")
      this.router.navigate(['books']);
      return;
      }; 
      
  
    this.editForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      author: ['', Validators.required],
      language: ['', Validators.required],
    });

    // не понятно откуда data, заменил на book
    this.bookService.getBook(+bookId)
     .subscribe( book => {
        this.editForm.setValue(book);
      // .subscribe( data => {
      //   this.editForm.setValue(data.result);
      });
  }
  onSubmit() {
    this.bookService.updateBook(this.editForm.value);
    this.router.navigate(['books']);
      // .pipe(first())
      // .subscribe(
      //   data => {
      //     if(data.status === 200) {
      //       alert('User updated successfully.');
      //       this.router.navigate(['list-user']);
      //     }else {
      //       alert(data.message);
      //     }
      //   },
      //   error => {
      //     alert(error);
        };
}

