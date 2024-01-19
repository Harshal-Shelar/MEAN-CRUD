import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
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
  instName: any = [];
  changeName: any;
  selectedUser: any;
  deleteUserName: any;
  openPopup: any = false;
  openDelete: any = false;
  searchText: any;
  instArray: any;
  deleteSuccess : any;

  instArrayList: any = ['Tabla', 'Piano', 'Guitar', 'Trumpet', 'Drums', 'Beatbox']

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.instArrayList.map((myData : any)=>{
      console.log("inst array list :- ", myData);
    });

    this.userService.getAllUsers(null).subscribe(result => {
      if (result) {
        this.userList = result.data;

        this.userList.map((data: any) => {
          if (data.instrument == "Drums") {
            return this.drums++;
          }
          if (data.instrument == "Guitar") {
            return this.guitar++;
          }
          if (data.instrument == "Trumpet") {
            return this.trumpet++;
          }
          if (data.instrument == "Piano") {
            return this.piano++;
          }
          if (data.instrument == "Tabla") {
            return this.tabla++;
          }
          if (data.instrument == "Beatbox") {
            return this.beatbox++;
          }
        })
      }
      this.instArray = [
        {
          imgSrc: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJ1bXN8ZW58MHx8MHx8fDA%3D",
          name: "Drums",
          total: this.drums
        },
        {
          imgSrc: "https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=pexels-juan-pablo-serrano-arenas-1246437.jpg&fm=jpg",
          name: "Piano",
          total: this.piano
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D",
          name: "Guitar",
          total: this.guitar
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1573871666457-7c7329118cf9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJ1bXBldHxlbnwwfHwwfHx8MA%3D%3D",
          name: "Trumpet",
          total: this.trumpet
        },
        {
          imgSrc: "https://t3.ftcdn.net/jpg/00/70/32/10/360_F_70321053_rphQ2sbox2DJIuZkCJjmxnMgpC0ml2HS.jpg",
          name: "Beatbox",
          total: this.beatbox
        },
        {
          imgSrc: "https://3.bp.blogspot.com/-hQjp7wRRg64/Ws_HGzsSjfI/AAAAAAAAL7E/__Aozb1wP-QNG_2lBil2ShAVMz-9Ev_-QCLcBGAs/s1600/Tabla.jpg",
          name: "Tabla",
          total: this.tabla
        }
      ]
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
