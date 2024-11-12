import {Component, OnInit} from '@angular/core';
import {PokemonDetailService} from '../services/modales/pokemon/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{

  mostrarDetail:string =""

  constructor(
    private pokemonDetailService: PokemonDetailService
  ) {}

  ngOnInit() {
    this.pokemonDetailService.detalles$.subscribe(de =>{
      this.mostrarDetail = de;
    })
  }
  verDetail(pk:string){
    this.mostrarDetail
  }
}
