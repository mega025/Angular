import {Component, OnInit} from '@angular/core';
import {PopupService} from '../services/utils/popup.service';
import {CharacterService} from '../services/marvel/character.service';
import {HttpClient} from '@angular/common/http';
import {Personajes} from '../services/interfaces/personajes';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {

 personajes: Personajes[] = [];

  constructor(
    private popupService: PopupService,
    private characterService: CharacterService,
    private http: HttpClient

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

  }


