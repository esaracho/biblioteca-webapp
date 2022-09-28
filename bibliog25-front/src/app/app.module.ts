import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksService } from './books-service.service';
import { UsersService } from './users-service.service';
import { LendingsService } from './lendings-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LendingsListComponent } from './lendings-list/lendings-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NewBookComponent,
    EditBookComponent,
    UsersListComponent,
    NewUserComponent,
    EditUserComponent,
    LendingsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BooksService, UsersService, LendingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
