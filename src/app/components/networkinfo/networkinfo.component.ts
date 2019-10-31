import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Ethernet } from '../../models/ethernet';
import { IpcRenderService } from '../../services/ipc-render.service';
import { ElectronService } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-networkinfo',
  templateUrl: './networkinfo.component.html',
  styleUrls: ['./networkinfo.component.scss']
})
export class NetworkinfoComponent implements OnInit {

  ethernetList: Ethernet[];

  constructor(private ipcservice: IpcRenderService) { }

  ngOnInit() {
    this.ipcservice.getInterfaces().subscribe((ethernets) => (this.ethernetList = ethernets));
  }

}

@NgModule({
  imports: [ BrowserModule ],
  providers: [ IpcRenderService, ElectronService ],
})

export class AppModule {}
