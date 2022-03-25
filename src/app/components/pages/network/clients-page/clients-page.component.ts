import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  DefaultNeopsTableConfiguration,
  NeopsTableConfiguration
} from "../../../generic-table/model/neops-table-configuration";
import {ClientService} from "../../../../service/neops-api/client.service";
import {ClientsTableModel} from "./model/clients-table-model";

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit, AfterViewInit {
  neopsTableConfiguration: NeopsTableConfiguration;
  neopsTableModel: ClientsTableModel;

  @ViewChild("rowExpandTemplate", { static: false })
  protected rowExpandTemplate?: TemplateRef<any>

  constructor(private clientService: ClientService) {
    this.neopsTableModel = new ClientsTableModel(this.clientService)

    this.neopsTableConfiguration = new DefaultNeopsTableConfiguration()
    this.neopsTableConfiguration.title = "Client Table"
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.neopsTableModel.rowExpandTemplate = this.rowExpandTemplate
  }

}
