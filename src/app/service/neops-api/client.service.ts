import {Injectable} from '@angular/core';
import {NeopsBaseService} from "./neops-base-service";
import {ClientsGQL, ClientType} from "@zebbra/neops-angular-graphql-client";
import {Apollo} from "apollo-angular";
import {AlertService} from "@zebbra/ngx-neops-app-services";

@Injectable({
  providedIn: 'root'
})
export class ClientService extends NeopsBaseService<ClientType>{
  constructor(private apollo: Apollo,
              private clientsGQL: ClientsGQL,
              private alertService: AlertService) {
    super()
  }

  public searchElements(searchQuery?: string, pageLength?: number, page?: number) {
    this.clientsGQL.watch({
      query: searchQuery || "",
      pageSize: pageLength || 100,
      page: page || 1,
      ordering: "id"
    }).valueChanges.subscribe({
      next: value => {
        super.handleSearchResult({
          results: value.data.clientsElastic?.results?.map(res => res as ClientType),
          loading: value.loading,
          totalCount: value.data.clientsElastic?.totalCount
        })
      },
      error: value => {
        this.alertService.showNotification("Error loading clients", "Please try again later", "info");
      },
      complete: () => {
        console.log("Complete from Clients Search Observer")
      }
    })
  }
}

