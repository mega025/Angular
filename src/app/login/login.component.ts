import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';

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
    alert(this.formulario.value)
  }

  }

}
