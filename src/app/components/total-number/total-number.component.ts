import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-number',
  templateUrl: './total-number.component.html',
  styleUrls: ['./total-number.component.scss']
})
export class TotalNumberComponent implements OnInit {

  userList: any = [];
  instName: any = [];
  changeName: any;
  selectedUser: any;
  deleteUserName: any;
  openPopup: any = false;
  openDelete: any = false;
  searchText: any;
  deleteSuccess: any;
  countArr: any[] = [];
  current: any[] = [];
  cnt = 0;
  valueArr: any;
  instrumentName: any = [];
  count: any = {};
  keys : any = [];
  values : any = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers(null).subscribe(result => {
      if (result) {
        this.userList = result.data;

        this.userList.map((x: any) => {
          this.instrumentName.push(x.instrument);
        });

        this.instrumentName.sort();

        this.instrumentName.forEach((element: any) => {
          this.count[element] = (this.count[element] || 0) + 1;
        });

        this.keys = Object.keys(this.count);
        this.values = Object.values(this.count);
      }
    });
  }

  closePopupNew() {
    this.instName = [];
    this.openPopup = false;
  }

  showListInfo(name: any) {
    this.openPopup = true;

    if (name === "Drums") {
      this.changeName = name;
      this.userList.map((data: any) => {
        if (data.instrument === "Drums") {
          this.instName.push(data);
        }
      })
    }
    if (name === "Guitar") {
      this.changeName = name;
      this.userList.map((data: any) => {
        if (data.instrument === "Guitar") {
          this.instName.push(data);
        }
      })
    }
    if (name === "Tabla") {
      this.changeName = name;
      this.userList.map((data: any) => {
        if (data.instrument === "Tabla") {
          this.instName.push(data);
        }
      })
    }
    if (name === "Beatbox") {
      this.changeName = name;
      this.userList.map((data: any) => {
        if (data.instrument === "Beatbox") {
          this.instName.push(data);
        }
      })
    }
    if (name === "Piano") {
      this.changeName = name;
      this.userList.map((data: any) => {
        if (data.instrument === "Piano") {
          this.instName.push(data);
        }
      })
    }
    if (name === "Trumpet") {
      this.changeName = name;
      this.userList.map((data: any) => {
        if (data.instrument === "Trumpet") {
          this.instName.push(data);
        }
      })
    }
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser._id).subscribe(result => {
      if (result) {
        this.openDelete = false;

        setTimeout(() => {
          this.deleteSuccess = true;
        }, 1000);

        console.log(result);
      }
    });
  }

  selectUser(user: any) {
    this.selectedUser = user;
    this.deleteUserName = user.firstName;
    this.openDelete = true;
  }
}
