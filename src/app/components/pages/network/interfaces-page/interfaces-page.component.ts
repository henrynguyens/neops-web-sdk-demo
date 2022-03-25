import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  DefaultNeopsTableConfiguration,
  NeopsTableConfiguration
} from "../../../generic-table/model/neops-table-configuration";
import {InterfaceService} from "../../../../service/neops-api/interface.service";
import {InterfacesTableModel} from "./model/interfaces-table-model";

@Component({
  selector: 'app-interfaces-page',
  templateUrl: './interfaces-page.component.html',
  styleUrls: ['./interfaces-page.component.scss']
})
export class InterfacesPageComponent implements OnInit, AfterViewInit {
  neopsTableConfiguration: NeopsTableConfiguration;
  neopsTableModel: InterfacesTableModel;

  @ViewChild("rowExpandTemplate", { static: false })
  protected rowExpandTemplate?: TemplateRef<any>

  constructor(private interfaceService: InterfaceService) {
    this.neopsTableModel = new InterfacesTableModel(this.interfaceService)

    this.neopsTableConfiguration = new DefaultNeopsTableConfiguration()
    this.neopsTableConfiguration.title = "Interface Table"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.neopsTableModel.rowExpandTemplate = this.rowExpandTemplate
  }



}
