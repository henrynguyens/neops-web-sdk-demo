import { Injectable } from '@angular/core';
import {Apollo} from "apollo-angular";
import {DevicesGQL, DeviceType} from "@zebbra/neops-angular-graphql-client";
import {AlertService} from "@zebbra/ngx-neops-app-services";
import {NeopsBaseService} from "./neops-base-service";

@Injectable({
  providedIn: 'root'
})
export class DeviceService extends NeopsBaseService<DeviceType>{
  constructor(private apollo: Apollo,
              private devicesGQL: DevicesGQL,
              private alertService: AlertService) {
    super()
  }

  public searchElements(searchQuery?: string, pageLength?: number, page?: number) {
    this.devicesGQL.watch({
      query: searchQuery || "",
      pageSize: pageLength || 100,
      page: page || 1
    }).valueChanges.subscribe({
      next: value => {
        super.handleSearchResult({
          results: value.data.devicesElastic?.results?.map(res => res as DeviceType),
          loading: value.loading,
          totalCount: value.data.devicesElastic?.totalCount
        })
      },
      error: value => {
        this.alertService.showNotification("Error loading devices", "Please try again later", "info");
      },
      complete: () => {
        console.log("Complete from Device Search Observer")
      }
    })
  }
}
