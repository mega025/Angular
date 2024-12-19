import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FavoritosService} from '../services/marvel/favoritos.service';
import {LoginService} from '../services/auth/login.service';
import {Personajes, PersonajesFavorito} from '../services/interfaces/personajes';
import {CharacterService} from '../services/marvel/character.service';
import {PopupService} from '../services/utils/popup.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.scss'
})
export class FavoritoComponent implements OnInit {
  personajes: Personajes[] = [];
  favoritosMarvel: Personajes[] = [];

  constructor(private http: HttpClient,
              private favoritosService: FavoritosService,
              private loginService: LoginService,
              private characterService: CharacterService,
              private popupService: PopupService,
              private favoritoService: FavoritosService,) {
  }

  ngOnInit(): void {

    this.popupService.loading("cargando...", "Por Favor espere");


    this.characterService.getAllCharacter().subscribe({
      next: response => {
        this.personajes = response.data.results;
        this.popupService.close();


      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        const user = this.loginService.getUser()

        if (user?.id) {
          this.favoritosService.getAll(user.id).subscribe({
            next: (response) => {
              const respuestaSpring: PersonajesFavorito[] = response;

              this.favoritosMarvel = this.personajes.filter(personajeMarvel =>//filter: filtra
                respuestaSpring.some(personajeGuardadoSpring =>//some: busca en el array si lo encuentra para
                  personajeGuardadoSpring.personajeMarvel == personajeMarvel.id)
              )
                .map(favorito => { // map: mira el array y no hace nada
                const match = respuestaSpring.find(spring =>
                  spring.personajeMarvel == favorito.id)
                return{...favorito, idSpring: match?.id}
              })
              console.log(this.favoritosMarvel);
            },
            error: (error) => {
              console.log(error);

            }


          })
        }

      }
    })


  }

  eliminar(idFavorito: number | undefined){
    const user = this.loginService.getUser()
    if (idFavorito) {
      this.favoritoService.deleteFav(idFavorito).subscribe({
        next: response => {
          this.popupService.loading( "Eliminado",
            "Se ha eliminado tu personaje de favoritos correctamente")

          setTimeout(() =>{

            this.popupService.close();
            window.location.reload();
          },1500)

        },
        error: err => {
          this.popupService.showMessage("error", "Oops. Error al eliminar",
            "Algo a salido mal. Error: " + err)
        }
      })
    }
  }

}
