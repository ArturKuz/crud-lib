import { BooksPageComponent } from './books-page/books-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  // {path : '', component : LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksPageComponent, canActivate: [AuthGuard]},
  { path: 'detail/:id', component: BooksDetailsComponent, canActivate: [AuthGuard] },
  { path: 'add-book', component: AddBookComponent, canActivate: [AuthGuard] },
  { path: 'edit-book/:id', component: EditBookComponent, canActivate: [AuthGuard] },
  { path: '', component: BooksPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
