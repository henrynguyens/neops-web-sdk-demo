import { TestBed } from '@angular/core/testing';

import { AppUpdateService } from './app-update.service';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";
import {ServiceWorkerModule, SwUpdate} from "@angular/service-worker";

describe('AppUpdateService', () => {
  let service: AppUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule, ServiceWorkerModule.register("", {enabled: false})],
      providers: [Apollo, NotificationService, SwUpdate],
    });
    service = TestBed.inject(AppUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
