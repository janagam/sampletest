import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlofDayComponent } from './dlof-day.component';

describe('DlofDayComponent', () => {
  let component: DlofDayComponent;
  let fixture: ComponentFixture<DlofDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlofDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlofDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
