import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PopupService} from '../services/utils/popup.service';

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
    private router: Router
  ) {
    this.registerForm = formBuilder.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      age: ['0'],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    })
  }

  showPasswordToggle (): void {
    this.showPassword =! this.showPassword;
  }

  enviar () {
    if (this.registerForm.invalid) {
      return;
    }


    this.popupService.showMessage(
      "success", "Registrarse",
      "Se ha registrado correctamente")

    this.router.navigate(['login'])
  }

}
