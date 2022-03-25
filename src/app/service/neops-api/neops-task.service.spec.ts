import {TestBed} from '@angular/core/testing';

import {NeopsTaskService} from './neops-task.service';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";

describe('TaskService', () => {
  let service: NeopsTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [Apollo, NotificationService],
    });
    service = TestBed.inject(NeopsTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
