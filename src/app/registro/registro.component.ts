import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PopupService} from '../services/utils/popup.service';
import {RegisterService} from '../services/auth/register.service';
import {NewUser} from '../services/interfaces/usuario';
import {Observable} from 'rxjs';

class PopUpService {
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  registerForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    private popupService: PopupService,
    private router: Router,
    private registroService: RegisterService
  ) {
    this.registerForm = formBuilder.group({
      username: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      edad: ['0'],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    })
  }

  showPasswordToggle (): void {
    this.showPassword =! this.showPassword;
  }

  enviar () {
    if (this.registerForm.invalid)
      return;

    const nuevoUsuario :NewUser = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      nombre: this.registerForm.value.nombre,
      email: this.registerForm.value.email,
      edad: this.registerForm.value.edad

    }

      this.registroService.createUser(nuevoUsuario).subscribe({
        next: () => {
          this.popupService.showMessage(
            "success",
            "Rgistro exitoso",
            "Te has registrado correctamente")
        },
        error: error => {
          console.log(error);
        }
      })

    this.router.navigate(['login'])
  }

}
