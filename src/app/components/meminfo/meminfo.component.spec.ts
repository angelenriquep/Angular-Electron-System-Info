import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeminfoComponent } from './meminfo.component';

describe('MeminfoComponent', () => {
  let component: MeminfoComponent;
  let fixture: ComponentFixture<MeminfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeminfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeminfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
