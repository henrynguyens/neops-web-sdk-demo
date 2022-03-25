import { TestBed } from '@angular/core/testing';

import { ClientService } from './client.service';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";

describe('ClientService', () => {
  let service: ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [Apollo, NotificationService],
    });
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
