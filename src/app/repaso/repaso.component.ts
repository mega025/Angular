import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styleUrl: './repaso.component.scss'
})
export class RepasoComponent {

  formulario: FormGroup;

  constructor(
    private formBuildes: FormBuilder
  ) {this.formulario = this.formBuildes.group({
    name:["",[Validators.required, Validators.minLength(2)]],
    categoria:["",[Validators.required]]
  })
  }
  enviar(){
    alert("Formulario enviado");
  }

}
