import { NgModule } from '@angular/core';
import { NgxNeopsAppComponentsComponent } from './ngx-neops-app-components.component';
import { NetworkDiagramComponent } from './network-diagram/network-diagram.component';
import {CardNodeModule} from "@carbon/charts-angular";
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {
  ButtonModule,
  DialogModule, GridModule,
  IconModule, InputModule, NumberModule,
  PaginationModule,
  TableModule, TilesModule,
  UIShellModule
} from "carbon-components-angular";
import {
  AddModule,
  AppSwitcherModule, Data_2Module, DataBaseModule, DeployModule, LocationModule,
  LogoutModule,
  MenuModule,
  NotificationModule, PlayModule, RunModule, SaveModule, ScanModule, TextLineSpacingModule,
  UserAvatarModule, UserModule, WikisModule
} from "@carbon/icons-angular";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    NgxNeopsAppComponentsComponent,
    NetworkDiagramComponent
  ],
  imports: [
    // angular

    CommonModule,

    // carbon

    CardNodeModule,
    IconModule,
    TableModule,
    UIShellModule,
    DialogModule,
    ButtonModule,
    PaginationModule,
    InputModule,
    TilesModule,
    GridModule,
    NumberModule,

    // carbon icons

    AddModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule,
    MenuModule,
    LogoutModule,
    TextLineSpacingModule,
    DeployModule,
    PlayModule,
    SaveModule,
    NotificationModule,
    RunModule,
    Data_2Module,
    UserModule,
    WikisModule,
    LocationModule,
    ScanModule,
    DataBaseModule,

    // other

    NgxGraphModule,
  ],
  exports: [
    NgxNeopsAppComponentsComponent,
    NetworkDiagramComponent
  ]
})
export class NgxNeopsAppComponentsModule { }
