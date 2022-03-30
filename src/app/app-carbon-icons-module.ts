import { NgModule } from '@angular/core';
import {
  AddModule,
  AppSwitcherModule, Data_2Module, DeployModule,
  LogoutModule,
  MenuModule,
  NotificationModule, PlayModule, RunModule, SaveModule, TextLineSpacingModule,
  UserAvatarModule, UserModule, WikisModule
} from "@carbon/icons-angular";


@NgModule({
  exports: [
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
    WikisModule
  ],
  providers: [
  ]
})
export class AppCarbonIconsModule {
  constructor() { }
}
