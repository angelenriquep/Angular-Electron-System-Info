import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Core } from '../../models/cores';
import { IpcRenderService } from '../../services/ipc-render.service';
import { ElectronService } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-coreinfo',
  templateUrl: './coreinfo.component.html',
  styleUrls: ['./coreinfo.component.scss']
})
export class CoreinfoComponent implements OnInit {

  coreList: Core[];
  subscription: Subscription;

  constructor(private ipcservice: IpcRenderService) {}

  ngOnInit() {
    this.ipcservice.getCores().subscribe((cores) => (this.coreList = cores));
  }

}

@NgModule({
  imports: [ BrowserModule ],
  providers: [ IpcRenderService, ElectronService ],
})

export class AppModule {}
