import {Component, OnInit} from '@angular/core';
import {PokemonDetailService} from '../services/modales/pokemon/pokemon-detail.service';
import {PokemonApi} from '../services/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{

  pokemon: PokemonApi | null = {
    name: "",
    url: ""
  }

  constructor(
    private pokemonDetailService: PokemonDetailService
  ) {}

  ngOnInit() {
    this.pokemonDetailService.detalles$.subscribe(pk =>{
      this.pokemon = pk;
    })
  }

}
