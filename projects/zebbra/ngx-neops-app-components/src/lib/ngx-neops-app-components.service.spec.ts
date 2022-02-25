import { TestBed } from '@angular/core/testing';

import { NgxNeopsAppComponentsService } from './ngx-neops-app-components.service';

describe('NgxNeopsAppComponentsService', () => {
  let service: NgxNeopsAppComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNeopsAppComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
