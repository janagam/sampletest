import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnrcDrugsIndiaComponent } from './gnrc-drugs-india.component';

describe('GnrcDrugsIndiaComponent', () => {
  let component: GnrcDrugsIndiaComponent;
  let fixture: ComponentFixture<GnrcDrugsIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnrcDrugsIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnrcDrugsIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
