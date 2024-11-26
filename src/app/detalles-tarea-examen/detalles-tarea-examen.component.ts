import {Component, OnInit} from '@angular/core';
import {Lista} from "../service/examen/lista";
import {ModalService} from "../service/examen/modal.service";
import {EnviarDatosService} from "../service/examen/enviar-datos.service";
import {DetallesServiceService} from "../service/examen/detalles-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-detalles-tarea-examen',
  templateUrl: './detalles-tarea-examen.component.html',
  styleUrl: './detalles-tarea-examen.component.scss'
})
export class DetallesTareaExamenComponent implements OnInit {
  lista : Lista[] | null = [
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

    constructor(
        private modalService: ModalService,
        private enviarDatosService : EnviarDatosService,
        private detallesServices: DetallesServiceService,
        private router:Router,

    ){}


    ngOnInit() {
        this.enviarDatosService.info$.subscribe(modal => {
            this.lista = modal;
        })

    }
    cerrar(){
        this.modalService.mostrarModal(false);
    }
    detalles(lista : Lista[]){
      this.detallesServices.detallado(lista)
        this.router.navigate(['Detalles']);
    }

}
