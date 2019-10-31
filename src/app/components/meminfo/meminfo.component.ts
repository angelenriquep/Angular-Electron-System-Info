import { Component, OnInit } from '@angular/core';
import { IpcRenderService } from '../../services/ipc-render.service';
import { interval, Subscription } from 'rxjs';
import { NgModule } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-meminfo',
  templateUrl: './meminfo.component.html',
  styleUrls: ['./meminfo.component.scss']
})
export class MeminfoComponent implements OnInit {

  totalMem: number;
  freeMem: number;
  usedMem: number;
  memPercentageFree: number;
  memPercentageUsed: number;
  subscription: Subscription;

  constructor(private ipcservice: IpcRenderService) { }

  ngOnInit() {
    //emit value in sequence every 30 second
    const source = interval(1000);
    this.subscription = source.subscribe(val => this.getMem());
  }

  getMem() {
    this.ipcservice.getTotalMem().subscribe((tMem) => (this.totalMem = tMem / 1000000 / 1024));
    this.ipcservice.getFreeMem().subscribe((freeMems) => (this.freeMem = freeMems / 1000000 / 1024));
    this.getUsedMem(this.totalMem, this.freeMem);
    this.getPercentageFree(this.totalMem, this.freeMem);
    this.getPercentageUsed(this.totalMem, this.usedMem);
  }

  getPercentageFree(total, free) {
    this.memPercentageFree = free / total * 100;
  }

  getUsedMem(total, free) {
    this.usedMem =  total - free;
  }

  getPercentageUsed(total, used) {
    this.memPercentageUsed = used / total * 100;
  }


}

@NgModule({
  imports: [ BrowserModule ],
  providers: [ IpcRenderService, ElectronService ],
})

export class AppModule {}