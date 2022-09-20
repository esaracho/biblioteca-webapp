import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books-service.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {

  book!: Books;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private booksService: BooksService) {
    this.book = new Books();
    }

  onSubmit() {
    this.booksService.save(this.book).subscribe(result => this.gotoBooksList());
  }

  gotoBooksList() {
    this.router.navigate(['/books']);
  }

}

