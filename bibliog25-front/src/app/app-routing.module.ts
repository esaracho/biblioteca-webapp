import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LendingsListComponent } from './lendings-list/lendings-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [

  {path: 'books', component: BooksListComponent},
  {path: 'addbook', component: NewBookComponent},
  {path: 'editbook', component: EditBookComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'adduser', component: NewUserComponent},
  {path: 'edituser', component: EditUserComponent},
  {path: 'lendings', component: LendingsListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
