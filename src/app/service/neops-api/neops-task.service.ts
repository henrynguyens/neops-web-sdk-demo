import {Injectable} from '@angular/core';
import {NeopsBaseService} from "./neops-base-service";
import {NeopsTasksGQL, NeopsTaskType} from "@zebbra/neops-angular-graphql-client";
import {Apollo} from "apollo-angular";
import {AlertService} from "../common/alert/alert.service";

@Injectable({
  providedIn: 'root'
})
export class NeopsTaskService extends  NeopsBaseService<NeopsTaskType>{

  constructor(private apollo: Apollo,
              private neopsTasksGQL: NeopsTasksGQL,
              private alertService: AlertService) {
    super()
  }

  public searchElements(searchQuery?: string, pageLength?: number, page?: number) {
    this.neopsTasksGQL.watch({

    }).valueChanges.subscribe({
      next: value => {
        super.handleSearchResult({
          results: value.data.neopsTasks?.results?.map(res => res as NeopsTaskType),
          loading: value.loading,
          totalCount: value.data.neopsTasks?.results?.length
        })
      },
      error: value => {
        this.alertService.showNotification("Error loading tasks", "Please try again later", "info");
      },
      complete: () => {
        console.log("Complete from Tasks Search Observer")
      }
    })
  }
}
