import {Component, Input, OnInit} from '@angular/core';
import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from "angular-gridster2";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-drag-drop-grid',
  templateUrl: './drag-drop-grid.component.html',
  styleUrls: ['./drag-drop-grid.component.scss']
})
export class DragDropGridComponent implements OnInit {
  gridItems: Array<GridsterItem> = []
  // noinspection JSMismatchedCollectionQueryUpdate
  private rawData: Array<String> = []
  options: GridsterConfig
  editMode: boolean = false;

  @Input() set data(value: Array<String>){
    this.rawData = value
    this.gridItems = value.map<GridsterItem>(rawValue => {
      return {
        content: rawValue,
        cols: 2,
        rows: 2,
        y: 0,
        x: 0,
        minItemCols: 2,
        minItemRows: 2
      }
    });

  }

  constructor() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 9,
      maxCols: 9,
      minRows: 9,
      maxRows: 9,
      // maxItemCols: 100,
      // minItemCols: 1,
      // maxItemRows: 100,
      // minItemRows: 1,
      // maxItemArea: 2500,
      // minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 9,
      emptyCellDragMaxRows: 9,
      ignoreMarginInRow: false,
      draggable: {
        enabled: false,
      },
      resizable: {
        enabled: false,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: environment.production,
      scrollToNewItems: false
    }
  }

  ngOnInit(): void {
  }

  addItem(item: string): void {
    this.gridItems.push({x: 0, y: 0, cols: 2, rows: 2, content: item, minItemCols: 2, minItemRows: 2});
  }

  removeItem($event: MouseEvent | TouchEvent, item: GridsterItem): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.gridItems.splice(this.gridItems.indexOf(item), 1);
  }

  editGrid() {
    this.editMode = true
    this.options.displayGrid = "onDrag&Resize"

    if(this.options.draggable){
      this.options.draggable.enabled = true
    }

    if(this.options.resizable){
      this.options.resizable.enabled = true
    }

    this.changedOptions();
  }

  saveGrid() {
    this.editMode = false
    this.options.displayGrid = "none"

    if(this.options.draggable){
      this.options.draggable.enabled = false
    }

    if(this.options.resizable){
      this.options.resizable.enabled = false
    }

    this.changedOptions();
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  addItemToGrid() {
    this.addItem("New item");
  }
}
