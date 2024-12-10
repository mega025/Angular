import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formulario:FormGroup;
  changeType :boolean = false;

ToggleOcultar(){
  this.changeType = !this.changeType;
}


  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupService,
    private router: Router,
  ) {

  this.formulario = this.formBuilder.group({
    usuario: ["", [Validators.required]],
    contrasena: ["", [Validators.required]],
  })
  }
  enviar(){
  if (this.formulario.invalid) {
    return;
  }else {
    this.popupService.showMessage("success",
      "Sesion iniciada",
      "Hola")
  }

  }
  Registrarme(){
  this.router.navigate(['registro']);
  }

}
