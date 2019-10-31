import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkinfoComponent } from './networkinfo.component';

describe('NetworkinfoComponent', () => {
  let component: NetworkinfoComponent;
  let fixture: ComponentFixture<NetworkinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
