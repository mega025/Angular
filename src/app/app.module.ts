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
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { BotonExamenComponent } from './boton-examen/boton-examen.component';
import { ListaTareaExamenComponent } from './lista-tarea-examen/lista-tarea-examen.component';
import { DetallesTareaExamenComponent } from './detalles-tarea-examen/detalles-tarea-examen.component';
import { ProductoComponent } from './producto/producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

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
    EditarComponent,
    BotonExamenComponent,
    ListaTareaExamenComponent,
    DetallesTareaExamenComponent,
    ProductoComponent,
    DetalleProductoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
