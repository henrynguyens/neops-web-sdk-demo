import { TestBed } from '@angular/core/testing';

import { NgxNeopsAppServicesService } from './ngx-neops-app-services.service';

describe('NgxNeopsAppServicesService', () => {
  let service: NgxNeopsAppServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNeopsAppServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
