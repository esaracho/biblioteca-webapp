import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users!: Users[];


  constructor(private router: Router,
  private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.findAll().subscribe(data => {
      this.users = data;
    })
  }

  editUser(id: number): void {
    this.router.navigate(['/edituser'], {state: {data: id}});
}

  deleteUser(userID: number){
  this.usersService.delete(userID.toString()).subscribe(result => this.refreshList());
  }

  refreshList() {
    this.ngOnInit();
  }

}
