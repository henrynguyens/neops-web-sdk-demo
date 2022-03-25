import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NeopsTableData, TableHeaderAndItem} from "./model/neops-table-data";
import {DefaultNeopsTableConfiguration, NeopsTableConfiguration} from "./model/neops-table-configuration";
import {TableHeaderItem, TableItem, TableModel} from "carbon-components-angular";

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() neopsTableData?: NeopsTableData<any>
  @Input() neopsTableConfiguration: NeopsTableConfiguration = new DefaultNeopsTableConfiguration()

  @ViewChild("contextMenuTemplate", { static: false })
  protected contextMenuTemplate: TemplateRef<any> |  undefined;

  contextActionsMenu = {
    header: new TableHeaderItem({data: "Actions"}),
    item: (element: any) => new TableItem({data: element, template: this.contextMenuTemplate})
  }

  model: TableModel;
  searchModel = "";

  constructor() {
    this.model = new TableModel()
  }

  ngOnInit(): void {
    this.neopsTableData?.service.elements.subscribe(next => this.setTableItems(next))
    this.neopsTableData?.service.totalCount.subscribe(next => this.model.totalDataLength = next)
    this.neopsTableData?.service.searchElements(undefined, this.model.pageLength, this.model.currentPage)

    // push the context menu as last column
    const tableHeaders = []
    tableHeaders.push(...this.neopsTableData?.tableCols || [])
    if(this.neopsTableData?.contextMenu){
      tableHeaders.push(this.contextActionsMenu)
    }
    this.model.header = tableHeaders.map(value => value.header) || []
  }

  cancelMethod() {

  }

  search(value: string) {
    this.neopsTableData?.service.searchElements(value, this.model.pageLength, this.model.currentPage)

  }

  selectPage(page: number) {
    this.model.currentPage = page
    this.neopsTableData?.service.searchElements(this.searchModel, this.model.pageLength, this.model.currentPage)
  }

  private setTableItems(items: Array<any>) {
    // push the context menu as last item in row
    const tableCols: Array<TableHeaderAndItem<any>> = []
    tableCols.push(...this.neopsTableData?.tableCols || [])

    if(this.neopsTableData?.contextMenu){
      tableCols.push(this.contextActionsMenu)
    }

    this.model.data = items.map(item => tableCols.map(col => {
      const cell = col.item(item)
      cell.expandedData = item
      return cell
    }) || [])
    if(this.neopsTableData?.rowExpandTemplate)
    this.injectRowExpandTemplateToFirstColumn(this.model.data)
  }

  private injectRowExpandTemplateToFirstColumn(data: TableItem[][]) {
    for (let row of data) {
      if (row.length > 0){
        const template = this.neopsTableData?.rowExpandTemplate
        if(template){
          row[0].expandedTemplate = template
        }
      }
    }
  }
}
