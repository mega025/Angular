import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {InicioComponent} from "./inicio/inicio.component";

const routes: Routes = [
  {path:"",component:LayoutSinHeaderComponent, children:[
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent}
    ]
  },
  {path:"", component:LayoutConHeaderComponent, children:[
      {path:"Inicio",component:InicioComponent},
    ]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
