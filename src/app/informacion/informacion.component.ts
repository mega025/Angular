import { Component } from '@angular/core';
import{Pokemon} from"../services/interfaces/pokemon";
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent {

  pokemon: Pokemon[] = [
    {id: 1, nombre:"Pachirisu", descripcion: "Forma parte del grupo de Pokémon " +
        "que posee bolsas de electricidad en las mejillas." +
        " Descarga por la cola la electricidad que acumula.",
      imagen_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/417.png"},
    {id: 2, nombre:"Arcanine ", descripcion: "Cuenta un antiguo pergamino que la gente" +
        " se quedaba fascinada al verlo correr por las praderas.\n" +
        "\n", imagen_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png"},
    {id: 3, nombre:"Rapidash ", descripcion: "Su crin de fuego centellea cuando galopa como una flecha a velocidades " +
        "que llegan a alcanzar los 240 km/h.", imagen_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/078.png"},
    {id: 4, nombre:"Gengar", descripcion: "Para quitarle la vida a su presa, " +
        "se desliza en su sombra y espera su oportunidad en silencio.", imagen_url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png"}
  ]

}
