import { TestBed, inject } from '@angular/core/testing';

import { OrderdetailsService } from './orderdetails.service';

describe('OrderdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderdetailsService]
    });
  });

  it('should be created', inject([OrderdetailsService], (service: OrderdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
