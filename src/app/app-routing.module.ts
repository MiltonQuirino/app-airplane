import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplaneListComponent } from './airplane/airplane-list/airplane-list.component';
import { AirplaneCreateComponent } from './airplane/airplane-create/airplane-create.component';

const routes: Routes = [
  { path: '', component: AirplaneListComponent },
  { path: 'Airplane/create', component: AirplaneCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
