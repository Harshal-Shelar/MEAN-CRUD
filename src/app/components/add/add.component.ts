import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Location } from '@angular/common';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  userForm!: FormGroup;
  imageSrc: any;
  formInvalid: any;
  enableSubmit: any;
  instArray = [
    {value : "Drums", name : "Drums"},
    {value : "Piano", name : "Piano"},
    {value : "Tabla", name : "Tabla"},
    {value : "Trumpet", name : "Trumpet"},
    {value : "Guitar", name : "Guitar"},
    {value : "Beatbox", name : "Beatbox"}
  ]

  constructor(
    private cd: ChangeDetectorRef,
    private location: Location,
    private toastr: ToastrService,
    private userService: UserService,
    private router : Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: [null, Validators.required],
      instrument: [null, Validators.required],
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
      profileImg: [null, Validators.required]
    });
  }
  addUser() {
    if (this.userForm.valid) {

      const formData = new FormData();
      formData.append('email', this.userForm.value.email);
      formData.append('firstName', this.userForm.value.firstName);
      formData.append('lastName', this.userForm.value.lastName);
      formData.append('address', this.userForm.value.address);
      formData.append('instrument', this.userForm.value.instrument);
      formData.append('phoneNumber', this.userForm.value.phoneNumber);
      formData.append('profileImg', this.userForm.value.profileImg);

      this.userService.addUser(formData).subscribe((result: any) => {
        if (result.status) {
          this.location.back();
          this.toastr.success(result.msg);
        } else {
          this.toastr.error(result.msg);
        }
      });
      this.enableSubmit = true;
      this.router.navigate(['/list']);
    } else {
      this.formInvalid = true;
      this.toastr.error('Fill all the required fields');
      return false;
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
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
              this.imageSrc = 'assets/img/user_profile.png';
              this.toastr.error('IMAGE_FORMAT_NOT_SUPPORTED');
              return false;
            } else if (size >= 20185920) { // 20mb
              this.imageSrc = 'assets/img/user_profile.png';
              this.toastr.error('IMAGE_SIZE_EXCEED');
              return false;
            } else {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                this.imageSrc = reader.result;
              };
              this.userForm.patchValue({
                profileImg: file
              });
              return true;
            }
          } else {
            this.imageSrc = 'assets/img/user_profile.png';
            this.toastr.error('FILE_FORMAT_NOT_SUPPORTED');
          }
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  fileOver(event: any) {
    // Gets called after a file-drop.
  }

  fileLeave(event: any) {
    // Gets called when you leave a file-drop.
  }
}
