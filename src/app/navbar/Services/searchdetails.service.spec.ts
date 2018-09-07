import { TestBed, inject } from '@angular/core/testing';

import { SearchdetailsService } from './searchdetails.service';

describe('SearchdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchdetailsService]
    });
  });

  it('should be created', inject([SearchdetailsService], (service: SearchdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
