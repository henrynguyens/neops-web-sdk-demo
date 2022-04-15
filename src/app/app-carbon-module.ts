import { NgModule } from '@angular/core';
import {
  ButtonModule,
  DialogModule,
  GridModule,
  IconModule,
  InputModule,
  NotificationDisplayService,
  NotificationService,
  NumberModule,
  PaginationModule,
  RadioModule,
  TableModule,
  TilesModule,
  UIShellModule,
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
    NumberModule,
    RadioModule,
  ],
  providers: [NotificationService, NotificationDisplayService],
})
export class AppCarbonModule {
  constructor() {}
}
