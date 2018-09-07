import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwPplrPrdctsComponent } from './gw-pplr-prdcts.component';

describe('GwPplrPrdctsComponent', () => {
  let component: GwPplrPrdctsComponent;
  let fixture: ComponentFixture<GwPplrPrdctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwPplrPrdctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwPplrPrdctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
