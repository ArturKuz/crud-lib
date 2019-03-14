import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import {AuthGuard} from './auth/auth-guard';
@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BooksDetailsComponent,
    BookSearchComponent,
    LoginComponent,
    HeaderComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,

  //  The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  //   and returns simulated server responses.
  //   Remove it when a real server is ready to receive requests.
  HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
  ),
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
