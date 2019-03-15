import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  // showBtn = false;

  constructor( private router: Router) { }

  ngOnInit() {
    // let user = localStorage.getItem('currentUser');
    // if (user) {
    //   this.showBtn = true;
    // }
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
