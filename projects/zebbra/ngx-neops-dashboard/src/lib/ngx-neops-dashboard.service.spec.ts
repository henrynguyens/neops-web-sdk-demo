import { TestBed } from '@angular/core/testing';

import { NgxNeopsDashboardService } from './ngx-neops-dashboard.service';

describe('NgxNeopsDashboardService', () => {
  let service: NgxNeopsDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNeopsDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
