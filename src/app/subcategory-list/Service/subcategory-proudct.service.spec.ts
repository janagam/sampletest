import { TestBed, inject } from '@angular/core/testing';

import { SubcategoryProudctService } from './subcategory-proudct.service';

describe('SubcategoryProudctService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubcategoryProudctService]
    });
  });

  it('should be created', inject([SubcategoryProudctService], (service: SubcategoryProudctService) => {
    expect(service).toBeTruthy();
  }));
});
