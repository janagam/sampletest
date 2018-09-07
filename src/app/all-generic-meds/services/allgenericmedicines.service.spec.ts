import { TestBed, inject } from '@angular/core/testing';

import { AllgenericmedicinesService } from './allgenericmedicines.service';

describe('AllgenericmedicinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllgenericmedicinesService]
    });
  });

  it('should be created', inject([AllgenericmedicinesService], (service: AllgenericmedicinesService) => {
    expect(service).toBeTruthy();
  }));
});
