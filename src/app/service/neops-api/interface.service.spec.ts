import {TestBed} from '@angular/core/testing';

import {InterfaceService} from './interface.service';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";

describe('InterfaceService', () => {
  let service: InterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [Apollo, NotificationService],
    });
    service = TestBed.inject(InterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
