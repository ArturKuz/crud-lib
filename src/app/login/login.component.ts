import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {USERS} from "../users/mock-users";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    let user = USERS.find(u => u.email == this.loginForm.controls.email.value && u.password == this.loginForm.controls.password.value);

    if (user) {
      localStorage.setItem('currentUser', user.role);
      this.router.navigate(['books']);
    } else {
      this.invalidLogin = true;
    }

    console.log('Is invalid login or password', this.invalidLogin)
  }
}
