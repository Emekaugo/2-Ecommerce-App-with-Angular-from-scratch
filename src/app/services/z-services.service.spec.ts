import { TestBed } from '@angular/core/testing';

import { ZServicesService } from './z-services.service';

describe('ZServicesService', () => {
  let service: ZServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
