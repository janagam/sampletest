import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwAddPrescriptionComponent } from './gw-add-prescription.component';

describe('GwAddPrescriptionComponent', () => {
  let component: GwAddPrescriptionComponent;
  let fixture: ComponentFixture<GwAddPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwAddPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwAddPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
