import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwWishlistComponent } from './gw-wishlist.component';

describe('GwWishlistComponent', () => {
  let component: GwWishlistComponent;
  let fixture: ComponentFixture<GwWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
