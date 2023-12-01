import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-number',
  templateUrl: './total-number.component.html',
  styleUrls: ['./total-number.component.scss']
})
export class TotalNumberComponent implements OnInit {

  drums: any = 0;
  piano: any = 0;
  guitar: any = 0;
  trumpet: any = 0;
  tabla: any = 0;
  beatbox: any = 0;
  userList: any = [];
  totalNumber: any;
  showTableInfo: any;
  infoName: any = [];
  changeName : any;
  hideBtn : any = false;
  displayStyle = "none"; 
  selectedUser: any;
  deleteUserName : any;
  openPopup : any;
  openDelete : any;
  searchText : any;

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers(null).subscribe(result => {
      if (result) {
        this.userList = result.data;
        this.totalNumber = this.userList.length;

        this.userList.map((data:any)=>{
          if(data.instrument == "Drums"){
            return this.drums++;
          }
          if(data.instrument == "Guitar"){
            return this.guitar++;
          }
          if(data.instrument == "Trumpet"){
            return this.trumpet++;
          }
          if(data.instrument == "Piano"){
            return this.piano++;
          }
          if(data.instrument == "Tabla"){
            return this.tabla++;
          }
          if(data.instrument == "Beatbox"){
            return this.beatbox++;
          }
        })
      } else {

      }
    });
  }

  closePopupNew() {
    this.showTableInfo = false;
    this.infoName = [];
    this.hideBtn = false;
    this.openPopup= false;
  }

  showListInfo(name: any) {
    this.showTableInfo = true;
    this.hideBtn = true;
    this.openPopup = true;

    if (name === "Drums") {
      this.changeName = name;
      this.userList.map((data:any)=>{
        if(data.instrument === "Drums"){
          this.infoName.push(data);
        }
      })
    }
    if (name === "Guitar") {
      this.changeName = name;
      this.userList.map((data:any)=>{
        if(data.instrument === "Guitar"){
          this.infoName.push(data);
        }
      })
    }
    if (name === "Tabla") {
      this.changeName = name;
      this.userList.map((data:any)=>{
        if(data.instrument === "Tabla"){
          this.infoName.push(data);
        }
      })
    }
    if (name === "Beatbox") {
      this.changeName = name;
      this.userList.map((data:any)=>{
        if(data.instrument === "Beatbox"){
          this.infoName.push(data);
        }
      })
    }
    if (name === "Piano") {
      this.changeName = name;
      this.userList.map((data:any)=>{
        if(data.instrument === "Piano"){
          this.infoName.push(data);
        }
      })
    }

    if (name === "Trumpet") {
      this.changeName = name;
      this.userList.map((data:any)=>{
        if(data.instrument === "Trumpet"){
          this.infoName.push(data);
        }
      })
    }
  }

  showFullList(){
    this.router.navigate(['/']);
  }

  deleteUser() {
    this.userService.deleteUser(this.selectedUser._id).subscribe(result => {
      if (result) {
        this.openDelete = false;
        console.log(result);
      }
    });
  }

  selectUser(user:any) {
    this.selectedUser = user;
    this.deleteUserName = user.firstName;
    this.openDelete = true;
  }
}
