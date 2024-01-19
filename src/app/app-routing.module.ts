import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListALLComponent } from './components/list-all/list-all.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { TotalNumberComponent } from './components/total-number/total-number.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'list' },
  // { path: 'login', component: LoginComponent },
  { path: 'add', component: AddComponent },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'totalNumber', component: TotalNumberComponent },
  { path: 'list', component: ListALLComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
