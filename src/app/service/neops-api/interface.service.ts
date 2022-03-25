import {Injectable} from '@angular/core';
import {NeopsBaseService} from "./neops-base-service";
import {InterfacesGQL, InterfaceType} from "@zebbra/neops-angular-graphql-client";
import {Apollo} from "apollo-angular";
import {AlertService} from "../common/alert/alert.service";

@Injectable({
  providedIn: 'root'
})
export class InterfaceService extends NeopsBaseService<InterfaceType> {
  constructor(private apollo: Apollo,
              private interfacesGQL: InterfacesGQL,
              private alertService: AlertService) {
    super()
  }

  public searchElements(searchQuery?: string, pageLength?: number, page?: number): void {
    this.interfacesGQL.watch({
      query: searchQuery || "",
      pageSize: pageLength || 100,
      page: page || 1
    }).valueChanges.subscribe({
      next: value => {
        super.handleSearchResult({
          results: value.data.interfacesElastic?.results?.map(res => res as InterfaceType),
          loading: value.loading,
          totalCount: value.data.interfacesElastic?.totalCount
        })
      },
      error: value => {
        this.alertService.showNotification("Error loading interfaces", "Please try again later", "info");
      },
      complete: () => {
        console.log("Complete from Device Search Observer")
      }
    })
  }

}
