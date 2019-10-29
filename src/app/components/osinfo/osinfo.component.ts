import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Ethernet } from '../../models/ethernet';
import { Core } from '../../models/cores';
import { IpcRenderService } from '../../services/ipc-render.service';
import { ElectronService } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';



import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-osinfo',
  templateUrl: './osinfo.component.html',
  styleUrls: ['./osinfo.component.scss']
})

export class OsinfoComponent implements OnInit {

  osType: string;
  platform: string;
  relase: string;
  coreList: Core[];
  ethernetList: Ethernet[];
  totalMem: number;
  freeMem: number;
  memPercentage: number;
  subscription: Subscription;

  constructor(private ipcservice: IpcRenderService) {} 

  ngOnInit() {
    this.ipcservice.getOsType().subscribe((osTypes) => (this.osType = osTypes));
    //this.ipcservice.getPlatform().subscribe((plat) => (this.platform = plat));
    this.ipcservice.getRelease().subscribe((releases) => (this.relase = releases));
    this.ipcservice.getCores().subscribe((cores) => (this.coreList = cores));
    this.ipcservice.getInterfaces().subscribe((ethernets) => (this.ethernetList = ethernets));
    
    //emit value in sequence every 10 second
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.getMem());

  }

  getPercentage(total, free) {
    this.memPercentage = free / total * 100;
  }

  getMem() {
    this.ipcservice.getTotalMem().subscribe((tMem) => (this.totalMem = tMem));
    this.ipcservice.getFreeMem().subscribe((freeMems) => (this.freeMem = freeMems));
    this.getPercentage(this.totalMem, this.freeMem);
  }


}

@NgModule({
  imports: [ BrowserModule ],
  providers: [ IpcRenderService, ElectronService ],
})

export class AppModule {}