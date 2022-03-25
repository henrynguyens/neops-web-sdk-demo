import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DeviceService} from "../../../../service/neops-api/device.service";
import {
  DefaultNeopsTableConfiguration,
  NeopsTableConfiguration
} from "../../../generic-table/model/neops-table-configuration";
import {DevicesTableModel} from "./model/devices-table-model";

@Component({
  selector: 'app-devices-page',
  templateUrl: './devices-page.component.html',
  styleUrls: ['./devices-page.component.scss']
})
export class DevicesPageComponent implements OnInit, AfterViewInit {
  neopsTableConfiguration: NeopsTableConfiguration;
  neopsTableModel: DevicesTableModel;

  @ViewChild("rowExpandTemplate", { static: false })
  protected rowExpandTemplate?: TemplateRef<any>

  constructor(private deviceService: DeviceService) {
    this.neopsTableModel = new DevicesTableModel(this.deviceService)

    this.neopsTableConfiguration = new DefaultNeopsTableConfiguration()
    this.neopsTableConfiguration.title = "Device Table"
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.neopsTableModel.rowExpandTemplate = this.rowExpandTemplate
  }

}
