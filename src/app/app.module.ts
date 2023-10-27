import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListALLComponent } from './list-all/list-all.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './service/user.service';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListALLComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxFileDropModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        maxOpened: 1,
        progressBar: true,
        progressAnimation: 'decreasing',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
