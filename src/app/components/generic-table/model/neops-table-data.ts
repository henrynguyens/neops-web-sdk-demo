import {NeopsBaseService} from "../../../service/neops-api/neops-base-service";
import {TableHeaderItem, TableItem} from "carbon-components-angular";
import {TemplateRef} from "@angular/core";

export interface NeopsTableData<T> {
  service: NeopsBaseService<T>
  tableCols: Array<TableHeaderAndItem<T>>
  contextMenu?: Array<TableContextMenuItem<T>>
  globalMenu?: Array<TableMenuItem>
  /**
   * If set, the table will be expandable and inject the element into the template
   */
  rowExpandTemplate?: TemplateRef<any>
}

export interface TableHeaderAndItem<T> {
  header: TableHeaderItem,
  item: (element: T) => TableItem,
}

export interface TableContextMenuItem<T> {
  label: string
  onItemClick: (element: T) => void
}

export interface TableMenuItem {
  label: string,
  onItemClick: () => void
  disabled?: boolean
  danger?: boolean
}

export abstract class BaseTableModel<T> implements NeopsTableData<T>{
  contextMenu?: Array<TableContextMenuItem<T>>;
  globalMenu?: Array<TableMenuItem>;
  rowExpandTemplate?: TemplateRef<any>;
  service: NeopsBaseService<T>;
  abstract tableCols: Array<TableHeaderAndItem<T>>;

  protected constructor(service: NeopsBaseService<T>) {
    this.service = service
  }
}
