import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListALLComponent implements OnInit {
  userList: any;
  selectedUser: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAllUsers(null).subscribe(result => {
      if (result) {
        this.userList = result.data;
      } else {

      }
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser._id).subscribe(result => {
      if (result) {
        this.getAll();
      }
    });
  }

  selectUser(user:any) {
    this.selectedUser = user;
  }
}
