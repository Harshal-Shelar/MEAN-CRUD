import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userForm!: FormGroup;
  userId: any;
  imageSrc: any;
  profileImgToUpload !: File;

  constructor(
    private cd: ChangeDetectorRef,
    private toastr: ToastrService,
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      instrument: [null, Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
      profileImg: [null]
    });
    
    this.userId = this.route.snapshot.params;
    console.log("user id :- ",this.userId);
    this.getUser();
  }

  editUser() {
    if (this.userForm.valid) {

      const formData = new FormData();
      formData.append('email', this.userForm.value.email);
      formData.append('firstName', this.userForm.value.firstName);
      formData.append('lastName', this.userForm.value.lastName);
      formData.append('address', this.userForm.value.address);
      formData.append('instrument', this.userForm.value.instrument);
      formData.append('phoneNumber', this.userForm.value.phoneNumber);
      if (this.profileImgToUpload) {
        formData.append('profileImg', this.profileImgToUpload);
      }

      this.userService.editUser(this.userId, formData).subscribe(result => {
        if (result.status) {
          this.toastr.success(result.msg);
          this.location.back();
        } else {
          this.toastr.error(result.msg);
        }
      });
    } else {
      this.toastr.error('Fill all the required fields');
      return false;
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe(result => {
      console.log("user form :- ", result.data.profileImg);
      if (result.status) {
        this.userForm.patchValue({
          email: result.data.email,
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          address: result.data.address,
          instrument: result.data.instrument,
          phoneNumber: result.data.phoneNumber,
          profileImg: result.data.profileImg
        });
        if (result.data.profileImg) {
          this.imageSrc = result.data.profileImg;
        }
      } else {
      }
    });

  }

  dropped(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const fileImage = file.name.split('.');
          const fileExt = fileImage[fileImage.length - 1];
          const fileType = file.type;
          const size = file.size;
          if (fileType.includes('image')) {
            if ('|jpg|png|jpeg|'.indexOf(fileExt) === -1) {
              this.imageSrc = '../../../../assets/img/user_profile.png';
              this.toastr.error('IMAGE_FORMAT_NOT_SUPPORTED');
              return false;
            } else if (size >= 20185920) { // 20mb
              this.imageSrc = '../../../../assets/img/user_profile.png';
              this.toastr.error('IMAGE_SIZE_EXCEED');
              return false;
            } else {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                this.imageSrc = reader.result;
              };
              this.profileImgToUpload = file;
              return true;
            }
          } else {
            this.imageSrc = '../../../../assets/img/user_profile.png';
            this.toastr.error('FILE_FORMAT_NOT_SUPPORTED');
          }
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }
  
  fileOver(event:any) {
    // Gets called after a file-drop.
  }

  fileLeave(event:any) {
    // Gets called when you leave a file-drop.
  }
}
