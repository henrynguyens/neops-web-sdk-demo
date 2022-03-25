import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../../service/common/alert/alert.service";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  gridCondensed: boolean;
  gutter: boolean = true;
  leftGutter: boolean = true;
  rightGutter: boolean = true ;
  rowCondensed: boolean = true;

  tiles = ["1", "2", "3", "4", "5"]

  constructor(private alertService: AlertService) {
    this.gridCondensed = true
  }

  ngOnInit(): void {
  }

  notify() {
    this.alertService.showNotification("Hello world", "This is a test message")
  }

}
