import {
  BaseTableModel,
  TableContextMenuItem,
  TableHeaderAndItem,
  TableMenuItem
} from "../../../../generic-table/model/neops-table-data";
import {InterfaceType} from "@zebbra/neops-angular-graphql-client";
import {NeopsBaseService} from "../../../../../service/neops-api/neops-base-service";
import {TableHeaderItem, TableItem} from "carbon-components-angular";

export class InterfacesTableModel extends BaseTableModel<InterfaceType>{
  override contextMenu: Array<TableContextMenuItem<InterfaceType>> = [
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

  tableCols: Array<TableHeaderAndItem<InterfaceType>> = [
    {
      header: new TableHeaderItem({data: "ID"}),
      item: element => new TableItem({data: element.id})
    },
    {
      header: new TableHeaderItem({data: "Description"}),
      item: element => new TableItem({data: element.description})
    }
  ];

  constructor(service: NeopsBaseService<InterfaceType>) {
    super(service)
  }
}
