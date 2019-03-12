import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksDetailsComponent } from './books-details/books-details.component'

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BooksDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
