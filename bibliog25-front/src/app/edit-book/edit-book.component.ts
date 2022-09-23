import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books-service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {

  book!: Books;

  constructor(
    private router: Router, 
    private booksService: BooksService) {
    this.book = new Books();
    }

  onSubmit() {
    this.book.id = history.state.data;
    this.booksService.edit(history.state.data, this.book).subscribe(result => this.gotoBooksList());
  }

  gotoBooksList() {
    this.router.navigate(['/books']);
  }

}