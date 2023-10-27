import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListALLComponent implements OnInit {

  userList: any = [];
  selectedUser: any;
  page : number = 1;
  count : number = 0;
  tableSize : number = 5;
  tableSizes : any = [5,10,15,20];
  openPopup: any = false;
  deleteUserName : any;

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
    this.deleteUserName = user.firstName;
    return this.openPopup = true;
  }

  onTableDataChange(event:any){
    this.page = event;
    this.getAll();
  }

  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAll();
  }
}
