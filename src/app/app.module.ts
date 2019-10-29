import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { 
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OsinfoComponent } from './components/osinfo/osinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    OsinfoComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
