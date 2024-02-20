import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { SharedService } from '../../service/shared.service';
import { Router } from '@angular/router';

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
  openSearch : any = false;
  deleteUserName : any;
  searchText : any;
  sortDir = 1;
  showSpinner : any;
  resArray: any[] = [];
  enableDelete : any;
  
  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
      this.getAll();
    }, 2000)
  }

  getAll() {
    this.userService.getAllUsers(null).subscribe(result => {
      if (result) {
        this.userList = result.data;
      }
    });
    return true;
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

  onSortClick(event: any) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-long-arrow-down')) {
      classList.remove('fa-long-arrow-down');
      classList.add('fa-long-arrow-up');
      this.sortDir = -1;
    } else {
      classList.add('fa-long-arrow-down');
      classList.remove('fa-long-arrow-up');
      this.sortDir = 1;
    }
    this.sortArr('email');
    this.sortArr('phone');
    this.sortArr('firstName');
    this.sortArr('lastName');
    this.sortArr('phoneNumber');
    this.sortArr('instrument');
  }

  sortArr(colName: any) {
    this.userList.sort((a: any, b: any) => {
      a = a[colName].toLowerCase();
      b = b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }

  selectUserCheckbox(event:any, userId :any){
    if(event.target.checked){
      this.resArray.push(userId);
      console.log(this.resArray);
    }else{
      console.log("not checked");
    }
  }
}
