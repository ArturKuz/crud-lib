import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.less']
})
export class AddBookComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private bookService: BookService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      // id: [],
      title: ['', Validators.required],
      author: ['', Validators.required],
      language: ['', Validators.required],
    });
  }

  onSubmit() {  
    console.log('Create book');  
    this.bookService.addBook(this.addForm.value)  
      .subscribe( book => {  
        this.router.navigate(['books']);  
      },  
      error => {  
        alert(error);  
      });  
  }
}
