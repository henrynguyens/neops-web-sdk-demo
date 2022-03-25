import {
  BaseTableModel,
  TableContextMenuItem,
  TableHeaderAndItem,
  TableMenuItem
} from "../../../../generic-table/model/neops-table-data";
import {DeviceGroupType} from "@zebbra/neops-angular-graphql-client";
import {TableHeaderItem, TableItem} from "carbon-components-angular";
import {NeopsBaseService} from "../../../../../service/neops-api/neops-base-service";

export class GroupsTableModel extends BaseTableModel<DeviceGroupType>{
  override contextMenu: Array<TableContextMenuItem<DeviceGroupType>> = [
    {
      label: "Delete",
      onItemClick: element => console.log("Would delete ", element)
    },
    {
      label: "Export",
      onItemClick: element => console.log("Would export ", element)
    }
  ];

  override globalMenu: Array<TableMenuItem> = [
    {
      label: "Super mode",
      onItemClick: () => console.log("Super mode enabled")
    }
  ];

  tableCols: Array<TableHeaderAndItem<DeviceGroupType>> = [
    {
      header: new TableHeaderItem({data: "ID"}),
      item: element => new TableItem({data: element.id})
    },
    {
      header: new TableHeaderItem({data: "Description"}),
      item: element => new TableItem({data: element.description})
    }
  ];

  constructor(service: NeopsBaseService<DeviceGroupType>) {
    super(service)
  }
}
