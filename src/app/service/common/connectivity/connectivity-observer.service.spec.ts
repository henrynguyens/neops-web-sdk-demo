import { TestBed } from '@angular/core/testing';

import { ConnectivityObserverService } from './connectivity-observer.service';

describe('ConnectivityObserverService', () => {
  let service: ConnectivityObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectivityObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
