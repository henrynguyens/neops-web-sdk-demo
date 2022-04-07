import {Injectable} from '@angular/core';
import {NeopsBaseService} from "./neops-base-service";
import {DeviceGroupElasticGQL, DeviceGroupType} from "@zebbra/neops-angular-graphql-client";
import {Apollo} from "apollo-angular";
import {AlertService} from "@zebbra/ngx-neops-app-services";

@Injectable({
  providedIn: 'root'
})
export class GroupService extends NeopsBaseService<DeviceGroupType>{
  constructor(private apollo: Apollo,
              private groupsGQL: DeviceGroupElasticGQL,
              private alertService: AlertService) {
    super()
  }

  public searchElements(searchQuery?: string, pageLength?: number, page?: number) {
    this.groupsGQL.watch({
      query: searchQuery || "",
      pageSize: pageLength || 100,
      page: page || 1
    }).valueChanges.subscribe({
      next: value => {
        super.handleSearchResult({
          results: value.data.groupsElastic?.results?.map(res => res as DeviceGroupType),
          loading: value.loading,
          totalCount: value.data.groupsElastic?.totalCount
        })
      },
      error: value => {
        this.alertService.showNotification("Error loading DeviceGroup", "Please try again later", "info");
      },
      complete: () => {
        console.log("Complete from DeviceGroup Search Observer")
      }
    })
  }
}
