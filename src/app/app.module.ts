import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AirplaneListComponent } from './airplane/airplane-list/airplane-list.component';
import { AirplaneService } from './services/airplane.service';
import {DataTableModule} from "angular-6-datatable";
import { AirplaneCreateComponent } from './airplane/airplane-create/airplane-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AirplaneListComponent,
    AirplaneCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AirplaneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
