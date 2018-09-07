import { TestBed, inject } from '@angular/core/testing';

import { TrackorderService } from './trackorder.service';

describe('TrackorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackorderService]
    });
  });

  it('should be created', inject([TrackorderService], (service: TrackorderService) => {
    expect(service).toBeTruthy();
  }));
});
