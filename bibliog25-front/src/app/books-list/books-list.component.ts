import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  providers: [BooksService]
})
export class BooksListComponent implements OnInit {

  books!: Books[];
  book!: Books;


  constructor(private route: ActivatedRoute, 
    private router: Router, private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.findAll().subscribe(data => {
      this.books = data;
    })
  }

  deleteBook(bookID: number){
  this.booksService.delete(bookID.toString()).subscribe(result => this.refreshList());
  }

  refreshList() {
    this.router.navigate(['/books']);
    this.ngOnInit();
  }
 //deleteBook(book: Books) {
 //   this.booksService.delete(book).subscribe(response => {
//
//      this.books = this.books.filter(item => item.id !== this.books.id);
 // }

}

