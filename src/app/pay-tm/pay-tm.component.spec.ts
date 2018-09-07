import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTmComponent } from './pay-tm.component';

describe('PayTmComponent', () => {
  let component: PayTmComponent;
  let fixture: ComponentFixture<PayTmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayTmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
