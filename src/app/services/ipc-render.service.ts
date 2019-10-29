import { Injectable } from '@angular/core';
import { Ethernet } from '../models/ethernet';
import { Core } from '../models/cores';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IpcRenderService {

  constructor(private _electronService: ElectronService) { }

  getOsType(): Observable<string> {
    return of(this._electronService.ipcRenderer.sendSync('get-ostype-info')).pipe(
      catchError((error: any) => Observable.throw(error.json))
      );
  }

  getPlatform(): Observable<string> {
    return of(this._electronService.ipcRenderer.sendSync('get-platform-info')).pipe(
      catchError((error: any) => Observable.throw(error.json))
      );
  }

  getRelease(): Observable<string> {
    return of(this._electronService.ipcRenderer.sendSync('get-release-info')).pipe(
      catchError((error: any) => Observable.throw(error.json))
      );
  }

  getCores(): Observable<Core[]> {
    return of(this._electronService.ipcRenderer.sendSync('get-cores-info')).pipe(
      catchError((error: any) => Observable.throw(error.json))
      );
  }

  getInterfaces(): Observable<Ethernet[]> {
    return of(this._electronService.ipcRenderer.sendSync('get-interfaces-info')).pipe(
      catchError((error: any) => Observable.throw(error.json))
      );
  }

  getTotalMem(): Observable<number> {
    return of(this._electronService.ipcRenderer.sendSync('get-totalMem-info')).pipe(
      catchError((error: any) => Observable.throw(error.json))
      );
  }

  getFreeMem(): Observable<number> {
    return of(this._electronService.ipcRenderer.sendSync('get-freeMem-info')).pipe(
      catchError((error: any) => Observable.throw(error.json))
      );
  }


}
