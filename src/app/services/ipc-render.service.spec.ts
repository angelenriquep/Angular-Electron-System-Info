import { TestBed } from '@angular/core/testing';

import { IpcRenderService } from './ipc-render.service';

describe('IpcRenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpcRenderService = TestBed.get(IpcRenderService);
    expect(service).toBeTruthy();
  });
});
