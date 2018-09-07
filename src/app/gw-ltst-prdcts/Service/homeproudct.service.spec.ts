import { TestBed, inject } from '@angular/core/testing';

import { HomeproudctService } from './homeproudct.service';

describe('HomeproudctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeproudctService]
    });
  });

  it('should be created', inject([HomeproudctService], (service: HomeproudctService) => {
    expect(service).toBeTruthy();
  }));
});
