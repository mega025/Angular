import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {InicioComponent} from "./inicio/inicio.component";
import {PersonalComponent} from "./personal/personal.component";
import {FamiliaComponent} from "./familia/familia.component";
import {DeporteComponent} from "./deporte/deporte.component";
import {CitasComponent} from "./citas/citas.component";
import {AnadirComponent} from "./anadir/anadir.component";

const routes: Routes = [
    {
        path: "", component: LayoutSinHeaderComponent, children: [
            {path: "", component: LoginComponent},
            {path: "register", component: RegisterComponent},
            {path: "Anadir", component: AnadirComponent},
        ]
    },
    {
        path: "", component: LayoutConHeaderComponent, children: [
            {path: "Inicio", component: InicioComponent},
            {path: "Personal", component: PersonalComponent},
            {path: "Familia", component: FamiliaComponent},
            {path: "Deporte", component: DeporteComponent},
            {path: "Citas", component: CitasComponent},
        ]
    }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
