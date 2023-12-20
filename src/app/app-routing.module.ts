import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListALLComponent } from './components/list-all/list-all.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { TotalNumberComponent } from './components/total-number/total-number.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainPageComponent },
  { path: 'add', component: AddComponent },
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
