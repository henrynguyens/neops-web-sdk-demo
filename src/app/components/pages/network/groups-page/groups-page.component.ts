import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {
  DefaultNeopsTableConfiguration,
  NeopsTableConfiguration
} from "../../../generic-table/model/neops-table-configuration";
import {GroupsTableModel} from "./model/groups-table-model";
import {GroupService} from "../../../../service/neops-api/group.service";

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss']
})
export class GroupsPageComponent implements OnInit, AfterViewInit {
  neopsTableConfiguration: NeopsTableConfiguration;
  neopsTableModel: GroupsTableModel;

  @ViewChild("rowExpandTemplate", { static: false })
  protected rowExpandTemplate?: TemplateRef<any>

  constructor(private groupService: GroupService) {
    this.neopsTableModel = new GroupsTableModel(this.groupService)

    this.neopsTableConfiguration = new DefaultNeopsTableConfiguration()
    this.neopsTableConfiguration.title = "Group Table"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.neopsTableModel.rowExpandTemplate = this.rowExpandTemplate
  }

}
