import { TestBed, inject } from '@angular/core/testing';

import { AjaxserviceService } from './ajaxservice.service';

describe('AjaxserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxserviceService]
    });
  });

  it('should be created', inject([AjaxserviceService], (service: AjaxserviceService) => {
    expect(service).toBeTruthy();
  }));
});
