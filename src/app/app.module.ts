import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import {provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import {authInterceptor} from './services/interceptor/auth.interceptor';
import { UsersComponent } from './users/users.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { CharacterComponent } from './character/character.component';
import { FavoritoComponent } from './favorito/favorito.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelControlComponent,
    LayoutConHeaderComponent,
    RegistroComponent,
    UsersComponent,
    BottomNavComponent,
    ModalAddUserComponent,
    CharacterComponent,
    FavoritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
     )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
