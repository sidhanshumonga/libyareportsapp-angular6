import { TestBed, inject } from '@angular/core/testing';

import { UtilityserviceService } from './utilityservice.service';

describe('UtilityserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilityserviceService]
    });
  });

  it('should be created', inject([UtilityserviceService], (service: UtilityserviceService) => {
    expect(service).toBeTruthy();
  }));
});
