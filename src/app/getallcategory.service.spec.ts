import { TestBed, inject } from '@angular/core/testing';

import { GetallcategoryService } from './getallcategory.service';

describe('GetallcategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetallcategoryService]
    });
  });

  it('should be created', inject([GetallcategoryService], (service: GetallcategoryService) => {
    expect(service).toBeTruthy();
  }));
});
