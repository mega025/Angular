import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';
import {Router} from '@angular/router';
import {LoginService} from '../services/auth/login.service';
import {LoginUser} from '../services/interfaces/usuario';

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
    private loginService: LoginService,
  ) {

  this.formulario = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  })
  }
  enviar(){
  if (this.formulario.invalid)
    return;


    const credenciales :LoginUser = {
      username: this.formulario.value.username,
      password: this.formulario.value.password,

    }

      this.loginService.LoginV2(credenciales).subscribe({

      next: (response) => {

      this.loginService.setUser(credenciales, response.user_id);
        this.popupService.loading(
          "Iniciar sesión",
          "Se ha iniciado sesión correctamente. espere unos segundos")
        setTimeout(() => {
          this.popupService.close()
          this.router.navigate(['users'])
        },
          2000)


      },
      error: (error) => {
        if (error.status === 401) {
          this.popupService.showMessage(
            "error",
            "Contraseña incorrecta",
           "Intentalo de nuevo")

        }else{
          this.popupService.showMessage(
            "error",
            "Usuario no existe",
            "Intentalo de nuevo",)
        }



        console.log(error);
      }
    })

  }

  Registrarme(){
  this.router.navigate(['registro']);
  }

}
