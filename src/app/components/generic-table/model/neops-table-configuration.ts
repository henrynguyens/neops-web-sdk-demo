import {TableRowSize} from "carbon-components-angular/table/table.types";

export interface NeopsTableConfiguration {
  offset: { x: number, y: number };
  searchModelPlaceHolder: string;
  searchExpandable: boolean;
  size: TableRowSize;
  batchText: string;
  description: string;
  title: string;
}

export class DefaultNeopsTableConfiguration implements NeopsTableConfiguration{
    offset: { x: number; y: number; } = {x:0, y:0};
    searchModelPlaceHolder: string = "Search";
    searchExpandable: boolean = true;
    size: TableRowSize = "md";
    batchText: string = "Element(s) selected";
    description: string = "Default description";
    title: string = "Element Table";

}
