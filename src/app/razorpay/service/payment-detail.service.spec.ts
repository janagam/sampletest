import { TestBed, inject } from '@angular/core/testing';

import { PaymentDetailService } from './payment-detail.service';

describe('PaymentDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentDetailService]
    });
  });

  it('should be created', inject([PaymentDetailService], (service: PaymentDetailService) => {
    expect(service).toBeTruthy();
  }));
});
