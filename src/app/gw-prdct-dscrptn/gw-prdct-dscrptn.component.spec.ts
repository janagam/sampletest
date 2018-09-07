import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwPrdctDscrptnComponent } from './gw-prdct-dscrptn.component';

describe('GwPrdctDscrptnComponent', () => {
  let component: GwPrdctDscrptnComponent;
  let fixture: ComponentFixture<GwPrdctDscrptnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwPrdctDscrptnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwPrdctDscrptnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
