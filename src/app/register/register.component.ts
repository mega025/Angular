import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  ocultar: boolean = true;
  Tipo : String = "password";
  ocultar2: boolean = true;
  Tipo2 : String = "password";
  toggleOcultar(){
    this.ocultar = !this.ocultar
    if (this.ocultar){
      this.Tipo = "password";
    }else {
      this.Tipo = "text";
    }
  }
  toggleOcultar2(){
    this.ocultar2 = !this.ocultar2
    if (this.ocultar2){
      this.Tipo2 = "password";
    }else {
      this.Tipo2 = "text";
    }
  }
  constructor(
      private router: Router,
  ) {}
  Iniciar(){
    this.router.navigate(['']);
  }

}
