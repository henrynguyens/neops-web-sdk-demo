import {
  BaseTableModel,
  TableContextMenuItem,
  TableHeaderAndItem,
  TableMenuItem
} from "../../../../generic-table/model/neops-table-data";
import {DeviceType} from "@zebbra/neops-angular-graphql-client";
import {TableHeaderItem, TableItem} from "carbon-components-angular";
import {NeopsBaseService} from "../../../../../service/neops-api/neops-base-service";

export class DevicesTableModel extends BaseTableModel<DeviceType>{
  override contextMenu: Array<TableContextMenuItem<DeviceType>> = [
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

  tableCols: Array<TableHeaderAndItem<DeviceType>> = [
    {
      header: new TableHeaderItem({data: "ID"}),
      item: element => new TableItem({data: element.id})
    },
    {
      header: new TableHeaderItem({data: "Created At"}),
      item: element => new TableItem({data: element.createdAt})
    }
  ];

  constructor(service: NeopsBaseService<DeviceType>) {
    super(service)
  }
}
