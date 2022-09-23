import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})

export class BooksListComponent implements OnInit {

  books!: Books[];


  constructor(private router: Router,
  private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.findAll().subscribe(data => {
      this.books = data;
    })
  }

  editBook(id: number): void {
    this.router.navigate(['/editbook'], {state: {data: id}});
}

  deleteBook(bookID: number){
  this.booksService.delete(bookID.toString()).subscribe(result => this.refreshList());
  }

  refreshList() {
    this.ngOnInit();
  }

}

