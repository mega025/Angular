import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonalComponent } from './personal/personal.component';
import { FamiliaComponent } from './familia/familia.component';
import { DeporteComponent } from './deporte/deporte.component';
import { CitasComponent } from './citas/citas.component';
import { AnadirComponent } from './anadir/anadir.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LayoutSinHeaderComponent,
    LayoutConHeaderComponent,
    InicioComponent,
    PersonalComponent,
    FamiliaComponent,
    DeporteComponent,
    CitasComponent,
    AnadirComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
