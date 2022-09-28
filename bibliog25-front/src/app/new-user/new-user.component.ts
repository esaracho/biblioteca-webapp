import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../users';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  user!: Users;

  constructor(
    private router: Router, 
    private usersService: UsersService) {
    this.user = new Users();
    }

  onSubmit() {
    this.usersService.save(this.user).subscribe(result => this.gotoUsersList());
  }

  gotoUsersList() {
    this.router.navigate(['/users']);
  }

}
