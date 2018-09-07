import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwSrchComponent } from './gw-srch.component';

describe('GwSrchComponent', () => {
  let component: GwSrchComponent;
  let fixture: ComponentFixture<GwSrchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwSrchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwSrchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
