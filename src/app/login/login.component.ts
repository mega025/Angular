import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

   ocultar: boolean = true;
   Tipo : String = "password";
   toggleOcultar(){
     this.ocultar = !this.ocultar
     if (this.ocultar){
       this.Tipo = "password";
     }else {
       this.Tipo = "text";
     }
   }

  constructor(
      private router  : Router
      ) {}

  Registrar(){
    this.router.navigate(['register']);
  }
  Iniciar(){
    this.router.navigate(['Inicio']);
  }

}
