import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lendings } from './lendings';
import { Observable, of } from 'rxjs';
import { Books } from './books';
import { BooksService } from './books-service.service';


@Injectable()
export class LendingsService {

  private usersUrl: string;
  //private books!: Books[];

  constructor(private http: HttpClient, private booksService: BooksService) {
    this.usersUrl = 'http://localhost:8080/api/lendings';
  }

  public findAll(): Observable<Lendings[]> {
    return this.http.get<Lendings[]>(this.usersUrl);
  }

  public save(prest: Lendings) {
    return this.http.post<Lendings>(this.usersUrl, prest);
  }

  public delete(lid: String) {
    return this.http.delete(this.usersUrl+'/'+lid);
  }

  //public dispoLibro(): Observable<Books[]>{
  //  this.booksService.findAll().subscribe(data => {
   //   this.books = data;
  //  })
  //  alert(JSON.stringify(this.books));
  //  let disponibles!: Books[];
  //  for(let b in this.books) {
  //    
  //    if(this.books[b].available > 0) {
  //    disponibles[b] = this.books[b];
  //    }
  //  }

  //  return of(disponibles);
  //}

  //public edit(uid: String, user: Users) {
  //  return this.http.put(this.usersUrl+'/'+uid, user);
  //}
}
