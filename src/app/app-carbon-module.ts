import { NgModule } from '@angular/core';
import {
  ButtonModule,
  DialogModule, GridModule,
  IconModule, InputModule, NotificationDisplayService, NotificationService, NumberModule, PaginationModule,
  TableModule, TilesModule,
  UIShellModule
} from 'carbon-components-angular';

@NgModule({
  exports: [
    IconModule,
    TableModule,
    UIShellModule,
    DialogModule,
    ButtonModule,
    PaginationModule,
    InputModule,
    TilesModule,
    GridModule,
    NumberModule
  ],
  providers: [
    NotificationService,
    NotificationDisplayService
  ]
})
export class AppCarbonModule {
  constructor() { }
}
