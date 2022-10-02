import { Component, OnInit, resolveForwardRef, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
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
  bookSelect!: Books;
  booksDisp!: Books[];
  sancTrue!: boolean;
  difDias!: number;
  moneySanc!: number;
  //fecha!: Date;
  //fechaRet!: Date;


  constructor(private lendingsService: LendingsService,
    private usersService: UsersService, private booksService: BooksService) {
      this.prestamo = new Lendings();
      this.bookSelect = new Books();
   //   this.sancTrue = false;
   //   this.fecha = new Date();
   //   this.fechaRet = new Date();
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
    let fechaAct = new Date()
    this.prestamo.date_out = fechaAct.toString()
    let fechaRet = this.addDays(fechaAct, 15);
    this.prestamo.date_return = fechaRet.toString();
    this.lendingsService.save(this.prestamo).subscribe(result => this.refreshList());
    //En el libro seleccionado en el prestamo se le resta 1 a la propiedad available en la tabla
    this.bookSelect = this.restAvail(this.prestamo.book_id)
    this.booksService.edit(this.prestamo.book_id.toString(), this.bookSelect).subscribe();
  }

  returnBook(prestID: number, bookID: number){
    this.bookSelect = this.addAvail(bookID)
    this.booksService.edit(bookID.toString(), this.bookSelect).subscribe();
    this.sanction(prestID);
    this.lendingsService.delete(prestID.toString()).subscribe(result => this.refreshList());
  }

  //Agrega los 15 dias de prestamo a la fecha de devolucion
  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  //Método para restar libro disponible en la tabla al momento del préstamo
  private restAvail(id: number): Books{

    this.loadBooksAvail();
    let bookRet = new Books();
    this.books.forEach((book) => {
      if(book.id == id){

         bookRet = book;

      }

    })
    bookRet.available = bookRet.available - 1;
    return bookRet;
  }

  //Método para sumar libro disponible en la tabla al momento de la devolución
  private addAvail(id: number): Books {

    this.loadBooksAvail();
    let bookRet = new Books();
    this.books.forEach((book) => {
      if(book.id == id){
         bookRet = book;

      }

    })
    bookRet.available = bookRet.available + 1;
    return bookRet;
  }

  //Método que verifica la entrega a destiempo, calcula la sanción y lo inserta en la tabla users
  private sanction(idPrest: number){

    let prestSel = new Lendings();
    let userSel = new Users();
    this.prestamos.forEach((presta) => {
      if(presta.id == idPrest) {
        prestSel = presta;
      }
    })

    this.users.forEach((user) => {
      if(user.id == prestSel.user_id) {
        userSel = user;
      }

    })

    let dateAct = new Date();
    let dateRet = new Date(Date.parse(prestSel.date_return.toString()))
    this.difDias = this.getDayDiff(dateRet, dateAct)

    if(this.difDias > 0){
      this.sancTrue = true;
      let cost_sanc = 5;
      this.moneySanc = cost_sanc * this.difDias;
      userSel.sanc_money = userSel.sanc_money + this.moneySanc;
      userSel.sanctions = userSel.sanctions + 1;
      this.usersService.edit(userSel.id.toString(), userSel).subscribe()
    } else {
      this.sancTrue = false;
    }

    

  }

  //Genera un array de objetos de los libros que tienen una disponibilidad mayor a cero para ser mostrada en la selección del libro a retirar.
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
  //Devuelve dias entre dos fechas (Dia de devolución y dia actual)
  getDayDiff(retDate: Date, actDate: Date): number {
    const msInDay = 24 * 60 * 60 * 1000;
    return Math.round(
      (actDate.getTime() - retDate.getTime()) / msInDay,
    );
  }  

  
  
    refreshList() {
      this.ngOnInit();
    }

}
