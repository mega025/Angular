import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FavoritosService} from '../services/marvel/favoritos.service';
import {LoginService} from '../services/auth/login.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.scss'
})
export class FavoritoComponent implements OnInit {

  constructor(private http: HttpClient,
  private favoritosService: FavoritosService,
              private loginService: LoginService,) { }

  ngOnInit(): void {
    const user = this.loginService.getUser()

    if (user?.id) {
      this.favoritosService.getAll(user.id).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }


      })
    }
  }

}
