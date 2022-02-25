import { TestBed } from '@angular/core/testing';

import { NgxNeopsClientService } from './ngx-neops-client.service';

describe('NgxNeopsClientService', () => {
  let service: NgxNeopsClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNeopsClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
