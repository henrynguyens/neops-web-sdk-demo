import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './components/app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { DevicesPageComponent } from './components/pages/network/devices-page/devices-page.component';
import { InterfacesPageComponent } from './components/pages/network/interfaces-page/interfaces-page.component';
import { ClientsPageComponent } from './components/pages/network/clients-page/clients-page.component';
import { GroupsPageComponent } from './components/pages/network/groups-page/groups-page.component';
import { TopologyPageComponent } from './components/pages/network/topology-page/topology-page.component';
import { TasksPageComponent } from './components/pages/tasks-page/tasks-page.component';
import { ConfigurationPageComponent } from './components/pages/configuration-page/configuration-page.component';
import { HelpPageComponent } from './components/pages/help-page/help-page.component';
import { HeaderComponent } from './components/header/header.component';
import {AppCarbonModule} from "./app-carbon-module";
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { IndexPageComponent } from './components/pages/index-page/index-page.component';
import {FormsModule} from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EditorComponent } from './components/editor/editor.component';
import {MonacoEditorModule} from "ngx-monaco-editor";
import {JsonformComponent} from "./components/jsonform/jsonform.component";
import {JsonFormsModule} from "@jsonforms/angular";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { DragDropGridComponent } from './components/drag-drop-grid/drag-drop-grid.component';
import {GridsterModule} from "angular-gridster2";
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import {AppCarbonIconsModule} from "./app-carbon-icons-module";
import { NetworkDiagramPageComponent } from './components/pages/network-diagram-page/network-diagram-page.component';
import { NetworkDiagramComponent } from './components/network-diagram/network-diagram.component';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {CardNodeModule, EdgeModule} from '@carbon/charts-angular';

@NgModule({
  declarations: [
    AppComponent,
    DevicesPageComponent,
    InterfacesPageComponent,
    ClientsPageComponent,
    GroupsPageComponent,
    TopologyPageComponent,
    TasksPageComponent,
    ConfigurationPageComponent,
    HelpPageComponent,
    HeaderComponent,
    LoginPageComponent,
    IndexPageComponent,
    EditorComponent,
    JsonformComponent,
    DragDropGridComponent,
    GenericTableComponent,
    NetworkDiagramPageComponent,
    NetworkDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    AppCarbonModule,
    AppCarbonIconsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MonacoEditorModule.forRoot(),
    JsonFormsModule,
    DragDropModule,
    GridsterModule,
    NgxGraphModule,
    CardNodeModule,
    EdgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
