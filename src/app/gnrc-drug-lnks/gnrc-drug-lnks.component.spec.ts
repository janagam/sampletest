import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnrcDrugLnksComponent } from './gnrc-drug-lnks.component';

describe('GnrcDrugLnksComponent', () => {
  let component: GnrcDrugLnksComponent;
  let fixture: ComponentFixture<GnrcDrugLnksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnrcDrugLnksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnrcDrugLnksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
