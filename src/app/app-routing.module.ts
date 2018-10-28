import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplaneListComponent } from './airplane/airplane-list/airplane-list.component';
import { AirplaneCreateComponent } from './airplane/airplane-create/airplane-create.component';
import { AirplaneDeleteComponent } from './airplane/airplane-delete/airplane-delete.component';

const routes: Routes = [
  { path: '', component: AirplaneListComponent },
  { path: 'airplane/create', component: AirplaneCreateComponent },
  { path: 'airplane/delete/:id', component: AirplaneDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
