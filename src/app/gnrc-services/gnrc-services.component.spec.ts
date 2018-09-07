import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnrcServicesComponent } from './gnrc-services.component';

describe('GnrcServicesComponent', () => {
  let component: GnrcServicesComponent;
  let fixture: ComponentFixture<GnrcServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnrcServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnrcServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
