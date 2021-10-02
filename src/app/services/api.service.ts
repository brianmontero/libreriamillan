import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _urlGet: string = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  getBooks(busqueda: string): Observable<Libro> {
    return this.http.get<Libro>(this._urlGet+busqueda);
  }

  getAutor(autor: string) {
    return this.http.get<Libro>(this._urlGet+`inauthor:${autor}`);
  }

  getNewest() {
    return this.http.get<Libro>('https://www.googleapis.com/books/v1/volumes?q=orderBy=newest');
  }

  getBestSellers() {
    return this.http.get<Libro>('https://www.googleapis.com/books/v1/volumes?q=relevance');
  }

  getNovels() {
    return this.http.get<Libro>('https://www.googleapis.com/books/v1/volumes?q=novels');
  }

  getEducative() {
    return this.http.get<Libro>('https://www.googleapis.com/books/v1/volumes?q=educative');
  }
}
