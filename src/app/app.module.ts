import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AirplaneListComponent } from './airplane/airplane-list/airplane-list.component';
import { AirplaneService } from './services/airplane.service';
import { DataTableModule } from "angular-6-datatable";
import { AirplaneCreateComponent } from './airplane/airplane-create/airplane-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';
import { AirplaneDeleteComponent } from './airplane/airplane-delete/airplane-delete.component';
import { AirplaneEditComponent } from './airplane/airplane-edit/airplane-edit.component';
import { AirplaneFormComponent } from './airplane/airplane-form/airplane-form.component';
import { ArchitectureComponent } from './pages/architecture/architecture.component';


registerLocaleData(localeFr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    AirplaneListComponent,
    AirplaneCreateComponent,
    HeaderComponent,
    FooterComponent,
    AirplaneDeleteComponent,
    AirplaneEditComponent,
    AirplaneFormComponent,
    ArchitectureComponent
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
    AirplaneService,
    { provide: LOCALE_ID, useValue: 'pt' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
