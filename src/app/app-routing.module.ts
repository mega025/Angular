import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {LayoutConHeaderComponent} from './layout-con-header/layout-con-header.component';
import {PanelControlComponent} from './panel-control/panel-control.component';
import {RegistroComponent} from './registro/registro.component';
import {UsersComponent} from './users/users.component';
import {isLoogedGuard} from './services/guards/is-looged.guard';
import {CharacterComponent} from './marvel-list/character.component';
import {FavoritoComponent} from './favorito/favorito.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full" },// si no hay nada se redirige al login siempre

  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},

      {path:"", component:LayoutConHeaderComponent, canActivate:[isLoogedGuard],children:[
          {path: "users", component: UsersComponent,},
          {path: "marvel", component: CharacterComponent},
          {path: "favoritos", component: FavoritoComponent}
        ] },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
