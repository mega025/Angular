import {Component, OnInit} from '@angular/core';
import {Lista} from "../service/examen/lista";
import {ModalService} from "../service/examen/modal.service";
import {Router} from "@angular/router";
import {EnviarDatosService} from "../service/examen/enviar-datos.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DetallesServiceService} from "../service/examen/detalles-service.service";

@Component({
  selector: 'app-lista-tarea-examen',
  templateUrl: './lista-tarea-examen.component.html',
  styleUrl: './lista-tarea-examen.component.scss'
})
export class ListaTareaExamenComponent implements OnInit {
  mostrarModal: boolean = false;
  formulario2: FormGroup;

  constructor(
      private router: Router,
      private modalService : ModalService,
      private enviarService: EnviarDatosService,
      private detallesService: DetallesServiceService,
      private fb: FormBuilder
  ) {this.formulario2 = this.fb.group({
    categoria: ['', Validators.required],
  });}


lista : Lista[] = [

  {id: 0,
    nombre : "Xinjie"
    , apellidos : "Pan"
    , descripcion :  "Estudiante "
    , estado :" Durmiendo"
  },
  {id: 2,
    nombre : "Axel"
    , apellidos : "Rojas"
    , descripcion :  "Estudiante "
    , estado :" Estudiando"
  },
  {id: 3,
    nombre : "Santiago"
    , apellidos : "Nicolas"
    , descripcion :  "Estudiante "
    , estado :" Jugando"
  }
]

  ngOnInit(): void {
    this.modalService.modal$.subscribe(modal => {
      this.mostrarModal = modal;
    })
  }

  mostrarMas(lista: Lista[]){
    this.enviarService.updateDetalles(lista);
    this.modalService.mostrarModal(true);
  }

  detallesLista(lista1: Lista){
    this.router.navigate(['detalles']);
  }


}
