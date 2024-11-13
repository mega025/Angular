import {PokemonDetailService} from '../services/modales/pokemon/pokemon-detail.service';
import {PokemonApi} from '../services/interfaces/pokemon';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  guardarDetalles:any

  constructor(
    private pokemonDetailService: PokemonDetailService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.pokemonDetailService.detalles$.subscribe(pk =>{
      this.pokemon = pk;
    })
    this.getAllData();
  }

  getAllData(){
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+this.pokemon?.name).subscribe(datos =>{
      this.guardarDetalles = datos
    })

  }

}
