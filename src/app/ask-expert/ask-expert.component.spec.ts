import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskExpertComponent } from './ask-expert.component';

describe('AskExpertComponent', () => {
  let component: AskExpertComponent;
  let fixture: ComponentFixture<AskExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
