import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Lendings } from '../lendings';
import { LendingsService } from '../lendings-service.service';
import { Users } from '../users';
import { UsersService } from '../users-service.service';
import { Books } from '../books';
import { BooksService } from '../books-service.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-lendings-list',
  templateUrl: './lendings-list.component.html',
  styleUrls: ['./lendings-list.component.css']
})

export class LendingsListComponent implements OnInit {

  prestamos!: Lendings[];
  prestamo!: Lendings;
  users!: Users[];
  books!: Books[];
  booksDisp!: Books[];
  fecha!: Date;
  fechaRet!: Date;


  constructor(private lendingsService: LendingsService,
    private usersService: UsersService, private booksService: BooksService) {
      this.prestamo = new Lendings();
      this.fecha = new Date();
      this.fechaRet = new Date();
     }

  ngOnInit(): void {
    this.usersService.findAll().subscribe(data => {
      this.users = data;
    })
    
 
    this.loadBooksAvail()

    this.lendingsService.findAll().subscribe(data => {
      this.prestamos = data;
   })
  }

  onSubmit() {
    this.prestamo.date_out = this.fecha.toString();
    this.fechaRet = this.addDays(this.fecha, 15);
    this.prestamo.date_return = this.fechaRet.toString();
    this.lendingsService.save(this.prestamo).subscribe(result => this.refreshList());
  }

  //Agrega los 15 dias de prestamo a la fecha de devolucion
  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }


  private async loadBooksAvail() {
    const books$ = this.booksService.findAll();
    this.books = await lastValueFrom(books$);
    this.booksDisp = [];
    let i = 0;
    this.books.forEach((book) => {
      if(book.available > 0){
        
        this.booksDisp[i] = book;
        i++;
      }

    })
  }

  returnBook(prestID: number){
    this.lendingsService.delete(prestID.toString()).subscribe(result => this.refreshList());
    }
  
    refreshList() {
      this.ngOnInit();
    }

}
