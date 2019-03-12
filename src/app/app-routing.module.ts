import { BooksPageComponent } from './books-page/books-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksDetailsComponent } from './books-details/books-details.component';

const routes: Routes = [
  { path: 'detail/:id', component: BooksDetailsComponent },
  { path: 'books', component: BooksPageComponent },
  { path: '', component: BooksPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
