import { TestBed, inject } from '@angular/core/testing';

import { DolfdayService } from './dolfday.service';

describe('DolfdayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DolfdayService]
    });
  });

  it('should be created', inject([DolfdayService], (service: DolfdayService) => {
    expect(service).toBeTruthy();
  }));
});
