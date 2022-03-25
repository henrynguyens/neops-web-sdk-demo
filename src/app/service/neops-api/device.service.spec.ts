import { TestBed } from '@angular/core/testing';

import { DeviceService } from './device.service';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";

describe('DeviceServiceService', () => {
  let service: DeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [Apollo, NotificationService],
    });
    service = TestBed.inject(DeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
