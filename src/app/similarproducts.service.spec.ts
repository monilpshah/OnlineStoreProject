import { TestBed, inject } from '@angular/core/testing';

import { SimilarproductsService } from './similarproducts.service';

describe('SimilarproductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimilarproductsService]
    });
  });

  it('should be created', inject([SimilarproductsService], (service: SimilarproductsService) => {
    expect(service).toBeTruthy();
  }));
});
