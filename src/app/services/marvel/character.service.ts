import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MarvelAuthParams} from '../utils/marvelAuth';
import {Personajes} from '../interfaces/personajes';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  url: string="https://gateway.marvel.com:443/v1/public/characters";
  marvelParams: any = null;

  constructor(
    private http: HttpClient,

  ) {
    this.marvelParams = MarvelAuthParams();
  }

  getAllCharacter(): Observable<any> {
  return this.http.get(this.url,{
    params: {
      ...this.marvelParams,
    }
  });
  }


}
