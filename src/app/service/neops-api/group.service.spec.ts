import {TestBed} from '@angular/core/testing';

import {GroupService} from './group.service';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [Apollo, NotificationService],
    });
    service = TestBed.inject(GroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
