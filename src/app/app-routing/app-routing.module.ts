import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {routingKeys} from "./routing-keys";
import {DevicesPageComponent} from "../components/pages/network/devices-page/devices-page.component";
import {InterfacesPageComponent} from "../components/pages/network/interfaces-page/interfaces-page.component";
import {ClientsPageComponent} from "../components/pages/network/clients-page/clients-page.component";
import {GroupsPageComponent} from "../components/pages/network/groups-page/groups-page.component";
import {ConfigurationPageComponent} from "../components/pages/configuration-page/configuration-page.component";
import {TasksPageComponent} from "../components/pages/tasks-page/tasks-page.component";
import {HelpPageComponent} from "../components/pages/help-page/help-page.component";
import {LoginPageComponent} from "../components/pages/login-page/login-page.component";
import {IndexPageComponent} from "../components/pages/index-page/index-page.component";
import {AuthGuard} from "./guards/auth.guard";
import {EditorComponent} from "../components/editor/editor.component";
import {JsonformComponent} from "../components/jsonform/jsonform.component";
import {NetworkDiagramPageComponent} from "../components/pages/network-diagram-page/network-diagram-page.component";

const routes: Routes = [
  {
    path: routingKeys.routeDefault,
    component: IndexPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: routingKeys.routeDevices,
    component: DevicesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: routingKeys.routeInterfaces,
    component: InterfacesPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: routingKeys.routeClients,
    component: ClientsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: routingKeys.routeGroups,
    component: GroupsPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: routingKeys.routeConfiguration,
    component: ConfigurationPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: routingKeys.routeTasks,
    component: TasksPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: routingKeys.routeHelp,
    component: HelpPageComponent
  },
  {
    path: routingKeys.routeLogin,
    component: LoginPageComponent
  },
  {
    path: routingKeys.routeEditor,
    component: EditorComponent
  },
  {
    path: routingKeys.routeJSONForm,
    component: JsonformComponent
  },
  {
    path: routingKeys.networkDiagram,
    component: NetworkDiagramPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
