import {
  BaseTableModel,
  TableContextMenuItem,
  TableHeaderAndItem,
  TableMenuItem
} from "../../../../generic-table/model/neops-table-data";
import {ClientType} from "@zebbra/neops-angular-graphql-client";
import {TableHeaderItem, TableItem} from "carbon-components-angular";
import {NeopsBaseService} from "../../../../../service/neops-api/neops-base-service";

export class ClientsTableModel extends BaseTableModel<ClientType>{
  override contextMenu: Array<TableContextMenuItem<ClientType>> = [
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

  tableCols: Array<TableHeaderAndItem<ClientType>> = [
    {
      header: new TableHeaderItem({data: "ID"}),
      item: element => new TableItem({data: element.id})
    },
    {
      header: new TableHeaderItem({data: "Created At"}),
      item: element => new TableItem({data: element.createdAt})
    }
  ];

  constructor(service: NeopsBaseService<ClientType>) {
    super(service)
  }
}
