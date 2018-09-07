import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstOfMdcnsComponent } from './lst-of-mdcns.component';

describe('LstOfMdcnsComponent', () => {
  let component: LstOfMdcnsComponent;
  let fixture: ComponentFixture<LstOfMdcnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstOfMdcnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstOfMdcnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
