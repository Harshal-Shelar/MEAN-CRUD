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
  infoLastName : any = [];
  infoPhoneNumber : any = [];
  infoAddress: any = [];
  allData : any = [];
  infoLast : any = [];
  changeName : any;

  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers(null).subscribe(result => {
      if (result) {
        this.userList = result.data;
        this.totalNumber = this.userList.length;

        for (let i = 0; i < this.userList.length; i++) {
          if (this.userList[i].instrument === "Drums") {
            this.drums++;
          }
          if (this.userList[i].instrument === "Piano") {
            this.piano++;
          }
          if (this.userList[i].instrument === "Beatbox") {
            this.beatbox++;
          }
          if (this.userList[i].instrument === "Trumpet") {
            this.trumpet++;
          }
          if (this.userList[i].instrument === "Tabla") {
            this.tabla++;
          }
          if (this.userList[i].instrument === "Guitar") {
            this.guitar++;
          }
        }
      } else {

      }
    });
  }

  showListInfo(name: any) {
    this.showTableInfo = true;
    if (name === "Drums") {
      this.changeName = name;
      for(let i = 0; i < this.userList.length ; i++){
        if (this.userList[i].instrument === "Drums"){
          this.infoName.push(this.userList[i]);
        }
      }
    }
    if (name === "Guitar") {
      this.changeName = name;
      for(let i = 0; i < this.userList.length ; i++){
        if (this.userList[i].instrument === "Guitar"){
          this.infoName.push(this.userList[i]);
        }
      }
    }
    if (name === "Tabla") {
      this.changeName = name;
      for(let i = 0; i < this.userList.length ; i++){
        if (this.userList[i].instrument === "Tabla"){
          this.infoName.push(this.userList[i]);
        }
      }
    }
    if (name === "BeatBox") {
      this.changeName = name;
      for(let i = 0; i < this.userList.length ; i++){
        if (this.userList[i].instrument === "Beatbox"){
          this.infoName.push(this.userList[i]);
        }
      }
    }
    if (name === "Piano") {
      this.changeName = name;
      for(let i = 0; i < this.userList.length ; i++){
        if (this.userList[i].instrument === "Piano"){
          this.infoName.push(this.userList[i]);
        }
      }
    }

    if (name === "Trumpet") {
      this.changeName = name;
      for(let i = 0; i < this.userList.length ; i++){
        if (this.userList[i].instrument === "Trumpet"){
          this.infoName.push(this.userList[i]);
        }
      }
    }
  }

  closePopup(){
    this.showTableInfo = false;
    this.infoName = [];
    this.infoLast = [];
  }

  showFullList(){
    this.router.navigate(['/']);
  }

}
