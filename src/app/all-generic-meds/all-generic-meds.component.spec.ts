import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGenericMedsComponent } from './all-generic-meds.component';

describe('AllGenericMedsComponent', () => {
  let component: AllGenericMedsComponent;
  let fixture: ComponentFixture<AllGenericMedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGenericMedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGenericMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
