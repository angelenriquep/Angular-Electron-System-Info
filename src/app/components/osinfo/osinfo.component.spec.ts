import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsinfoComponent } from './osinfo.component';

describe('OsinfoComponent', () => {
  let component: OsinfoComponent;
  let fixture: ComponentFixture<OsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
