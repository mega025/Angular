import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {LayoutConHeaderComponent} from './layout-con-header/layout-con-header.component';
import {PanelControlComponent} from './panel-control/panel-control.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full" },// si no hay nada se redirige al login siempre
  {path: "login", component: LoginComponent},
  {path: "app", component: LayoutConHeaderComponent, children: [
      {path:"", redirectTo: "panel-controls", pathMatch: "full" },
      {path: "panel-control" , component: PanelControlComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
