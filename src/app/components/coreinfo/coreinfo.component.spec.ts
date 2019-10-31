import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreinfoComponent } from './coreinfo.component';

describe('CoreinfoComponent', () => {
  let component: CoreinfoComponent;
  let fixture: ComponentFixture<CoreinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
