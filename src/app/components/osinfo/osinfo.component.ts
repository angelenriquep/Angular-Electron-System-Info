import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { IpcRenderService } from '../../services/ipc-render.service';
import { ElectronService } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-osinfo',
  templateUrl: './osinfo.component.html',
  styleUrls: ['./osinfo.component.scss']
})

export class OsinfoComponent implements OnInit {

  osType: string;
  platform: string;
  relase: string;

  constructor(private ipcservice: IpcRenderService) {} 

  ngOnInit() {
    this.ipcservice.getOsType().subscribe((osTypes) => (this.osType = osTypes));
    this.ipcservice.getPlatform().subscribe((plat) => (this.platform = plat));
    this.ipcservice.getRelease().subscribe((releases) => (this.relase = releases));
  }


}

@NgModule({
  imports: [ BrowserModule ],
  providers: [ IpcRenderService, ElectronService ],
})

export class AppModule {}