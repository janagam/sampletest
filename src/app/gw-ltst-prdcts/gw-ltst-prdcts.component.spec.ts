import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwLtstPrdctsComponent } from './gw-ltst-prdcts.component';

describe('GwLtstPrdctsComponent', () => {
  let component: GwLtstPrdctsComponent;
  let fixture: ComponentFixture<GwLtstPrdctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwLtstPrdctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwLtstPrdctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
