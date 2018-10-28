import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirplaneListComponent } from './airplane/airplane-list/airplane-list.component';
import { AirplaneCreateComponent } from './airplane/airplane-create/airplane-create.component';
import { AirplaneDeleteComponent } from './airplane/airplane-delete/airplane-delete.component';
import { AirplaneEditComponent } from './airplane/airplane-edit/airplane-edit.component';
import { ArchitectureComponent } from './pages/architecture/architecture.component';

const routes: Routes = [
  { path: '', component: AirplaneListComponent },
  { path: 'airplane/create', component: AirplaneCreateComponent },
  { path: 'airplane/delete/:id', component: AirplaneDeleteComponent },
  { path: 'airplane/edit/:id', component: AirplaneEditComponent },
  { path: 'pages/architecture', component: ArchitectureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
