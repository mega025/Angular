import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../services/interfaces/pokemon';
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/modales/pokemon/enviar-pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{

  pokemon:Pokemon | null={
    id:-1,
    nombre:"",
    descripcion:"",
    imagen_url:""
  }

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService
  ){}

  ngOnInit() {
    this.enviarPokemonService.info$.subscribe(modal =>{
      this.pokemon = modal;
    })
  }
  cerrar(){
    this.informacionService.toggleModal(false);
  }


}
