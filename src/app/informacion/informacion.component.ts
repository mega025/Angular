import {Component, OnInit} from '@angular/core';
import{Pokemon,PokemonApi} from"../services/interfaces/pokemon";
import {InformacionService} from '../services/modales/informacion.service';
import {EnviarPokemonService} from '../services/modales/pokemon/enviar-pokemon.service';
import {PokemonApiService} from '../services/modales/pokemon/pokemon-api.service';
import {Router} from '@angular/router';
import {PokemonDetailService} from '../services/modales/pokemon/pokemon-detail.service';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit{
  mostrarModal:boolean = false

  pokemonApi : PokemonApi[]=[]

  constructor(
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService,
    private pokemonapiService: PokemonApiService,
    private pokemonDetailService: PokemonDetailService,
    private router: Router
  ){}

  ngOnInit() {
    this.informacionService.modal$.subscribe(modal => {
      this.mostrarModal = modal;
    })

    this.pokemonapiService.getAllPokemon().subscribe({
      next : data => { //si funciona
        console.log(data.results)
        this.pokemonApi = data.results
        //console.log(this.pokemonApi)
      },
      error : error => { // no funciona con la api o server
        console.log(error)
      },
      complete : () =>{// da igual si funciona o no
        console.log("comunicación finalizada")
      }

    })
  }

  mostrarMas(pk:Pokemon){
    this.enviarPokemonService.updatePokemon(pk);
    this.informacionService.toggleModal(true);
  }

  pokemon: Pokemon[] = [
    {id: 1, nombre:"Pachirisu:", descripcion: "Forma parte del grupo de Pokémon " +
        "que posee bolsas de electricidad en las mejillas." +
        " Descarga por la cola la electricidad que acumula.",
      imagen_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/417.png"},
    {id: 2, nombre:"Arcanine:", descripcion: "Cuenta un antiguo pergamino que la gente" +
        " se quedaba fascinada al verlo correr por las praderas.\n" +
        "\n", imagen_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png"},
    {id: 3, nombre:"Rapidash:", descripcion: "Su crin de fuego centellea cuando galopa como una flecha a velocidades " +
        "que llegan a alcanzar los 240 km/h.", imagen_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/078.png"},
    {id: 4, nombre:"Gengar:", descripcion: "Para quitarle la vida a su presa, " +
        "se desliza en su sombra y espera su oportunidad en silencio.", imagen_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png"}
  ]

  detallesPokemon(pk: PokemonApi){
    this.pokemonDetailService.detallado(pk)
    this.router.navigate(['detalles']);
  }

}
