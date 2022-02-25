import { TestBed } from '@angular/core/testing';

import { NgxNeopsGenericTableService } from './ngx-neops-generic-table.service';

describe('NgxNeopsGenericTableService', () => {
  let service: NgxNeopsGenericTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNeopsGenericTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
