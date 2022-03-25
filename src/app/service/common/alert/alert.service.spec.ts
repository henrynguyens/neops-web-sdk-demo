import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [Apollo, NotificationService],
    });
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
