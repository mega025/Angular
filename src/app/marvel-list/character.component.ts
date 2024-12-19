import {Component, OnInit} from '@angular/core';
import {PopupService} from '../services/utils/popup.service';
import {CharacterService} from '../services/marvel/character.service';
import {HttpClient} from '@angular/common/http';
import {Personajes} from '../services/interfaces/personajes';
import {FavoritosService} from '../services/marvel/favoritos.service';
import {LoginService} from '../services/auth/login.service';

@Component({
  selector: 'app-marvel-list',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {

 personajes: Personajes[] = [];

  constructor(
    private popupService: PopupService,
    private characterService: CharacterService,
    private http: HttpClient,
    private favoritoService: FavoritosService,
    private loginService: LoginService

  ) {
  }

  ngOnInit(): void {
    this.popupService.loading("cargando...", "Por Favor espere");
    this.AllCharacters();
  }

  AllCharacters(): void {
    this.characterService.getAllCharacter().subscribe({
      next: response => {
        this.personajes = response.data.results;
        this.popupService.close();


      },
      error: err => {
        console.log(err);
      }
    })
  }

  addFavorito(idFavorito:number){
    const user = this.loginService.getUser()
    if (user?.id) {
      this.favoritoService.addFavorto(user.id, idFavorito).subscribe({
        next: response => {
          this.popupService.showMessage("success", "Añadido a favoritos",
            "Se ha añadido tu serie a favoritos correctamente")

        },
        error: err => {
          this.popupService.showMessage("error", "Oops. Error al añadir  a favoritos",
            "Algo a salido mal. Error: " + err)
        }
      })
    }
  }

  }


