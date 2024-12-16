import { Component } from '@angular/core';
import *  as bootstrap from 'bootstrap';
import {Modal} from 'bootstrap';
import {NewUser} from '../services/interfaces/usuario';
import {Router} from '@angular/router';
import {RegisterService} from '../services/auth/register.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrl: './modal-add-user.component.scss'
})
export class ModalAddUserComponent {
  registerForm: FormGroup;


  constructor(
    private router: Router,
    private registroService: RegisterService,
    public formBuilder: FormBuilder,

  ) { this.registerForm = formBuilder.group({
    username: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    edad: ['0'],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
  })
  }

  closeModal(){
const modalElement : HTMLElement | null = document.getElementById("myModal");
if (modalElement) {
const modalIntance : Modal| null = bootstrap.Modal.getInstance(modalElement);
modalIntance?.hide();
}
  }


}
