import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Books } from './books';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})
export class BooksService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/books';
  }

  public findAll(): Observable<Books[]> {
    return this.http.get<Books[]>(this.usersUrl);
  }

  public save(book: Books) {
    return this.http.post<Books>(this.usersUrl, book);
  }

  public delete(bid: String) {
    return this.http.delete(this.usersUrl+'/'+bid);
  }

  public edit(bid: String, book: Books) {
    return this.http.put(this.usersUrl+'/'+bid, book);

  }
}

