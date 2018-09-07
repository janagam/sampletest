import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyGnrcMdcnComponent } from './why-gnrc-mdcn.component';

describe('WhyGnrcMdcnComponent', () => {
  let component: WhyGnrcMdcnComponent;
  let fixture: ComponentFixture<WhyGnrcMdcnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyGnrcMdcnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyGnrcMdcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
