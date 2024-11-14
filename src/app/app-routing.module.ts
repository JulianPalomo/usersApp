import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'info/:id', component: InfoComponent},
  {path: 'add', component: AddComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
