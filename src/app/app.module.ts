import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxElectronModule } from 'ngx-electron';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//Material Design Angular
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
  MatGridListModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OsinfoComponent } from './components/osinfo/osinfo.component';
import { MeminfoComponent } from './components/meminfo/meminfo.component';
import { CoreinfoComponent } from './components/coreinfo/coreinfo.component';

//Router Module
import { RouterModule, Routes } from '@angular/router';
import { NetworkinfoComponent } from './components/networkinfo/networkinfo.component';

const appRoutes: Routes = [
  { path: '', component: OsinfoComponent, data: { title: 'OS INFO' }},
  { path: 'networkinfo', component: NetworkinfoComponent },
  { path: 'osinfo', component: OsinfoComponent },
  { path: 'meminfo', component: MeminfoComponent },
  { path: 'coreinfo', component: CoreinfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OsinfoComponent,
    MeminfoComponent,
    CoreinfoComponent,
    NetworkinfoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
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
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
