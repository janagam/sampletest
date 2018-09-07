import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompostionsearchComponent } from './compostionsearch.component';

describe('CompostionsearchComponent', () => {
  let component: CompostionsearchComponent;
  let fixture: ComponentFixture<CompostionsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompostionsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompostionsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
