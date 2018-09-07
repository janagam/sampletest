import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwCheckoutComponent } from './gw-checkout.component';

describe('GwCheckoutComponent', () => {
  let component: GwCheckoutComponent;
  let fixture: ComponentFixture<GwCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
