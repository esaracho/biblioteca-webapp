import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  user!: Users;

  constructor(
    private router: Router, 
    private usersService: UsersService) {
    this.user = new Users();
    }

  onSubmit() {
    this.user.id = history.state.data;
    this.usersService.edit(history.state.data, this.user).subscribe(result => this.gotoUsersList());
  }

  gotoUsersList() {
    this.router.navigate(['/users']);
  }

}
