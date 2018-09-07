import { TestBed, inject } from '@angular/core/testing';

import { CartaddressService } from './cartaddress.service';

describe('CartaddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartaddressService]
    });
  });

  it('should be created', inject([CartaddressService], (service: CartaddressService) => {
    expect(service).toBeTruthy();
  }));
});
