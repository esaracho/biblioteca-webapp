import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [

  {path: 'books', component: BooksListComponent},
  {path: 'addbook', component: NewBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
