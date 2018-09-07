import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HstryOfGnrcDrugsComponent } from './hstry-of-gnrc-drugs.component';

describe('HstryOfGnrcDrugsComponent', () => {
  let component: HstryOfGnrcDrugsComponent;
  let fixture: ComponentFixture<HstryOfGnrcDrugsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HstryOfGnrcDrugsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HstryOfGnrcDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
