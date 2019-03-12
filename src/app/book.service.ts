import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './books/book';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private booksUrl = 'api/books';  // URL to web api

  constructor( private http: HttpClient ) { }

  /** GET books from the server */

  getBooks(): Observable<Book[]> {

    return this.http.get<Book[]>(this.booksUrl);
  }

  /** GET book by id. */
  getBook(id: number): Observable<Book> {

    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  /** PUT: update the book on the server */
  updateBook(book: Book): Observable<any> {

    return this.http.put(this.booksUrl, book, httpOptions);
  }

  /** POST: add a new book to the server */
  addBook(book: Book): Observable<Book> {

    return this.http.post<Book>(this.booksUrl, book, httpOptions);
  }

  /** DELETE: delete the book from the server */
  deleteBook(book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<Book>(url, httpOptions);
  }

  /* GET bookss whose name contains search term */
  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      // if not search term, return empty book array.
      return of([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?title=${term}`);
  }
}
