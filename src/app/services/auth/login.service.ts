import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginUser} from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:String = 'http://localhost:8080/api/users';

  constructor(
    private http: HttpClient,
  ) { }
  Login(credenciales: LoginUser): Observable<any> {
    return this.http.post(this.url + "/login", credenciales, {

    })
  }

  LoginV2(credenciales: LoginUser): Observable<any> {
    return this.http.post(this.url + "/login/v2", credenciales)
  }
  setUser(datos:LoginUser, user_id: any): void{
    sessionStorage.setItem("user", JSON.stringify({...datos, id: user_id}));
  }
  getUser(): LoginUser|null {
    const user = JSON.parse(<string>sessionStorage.getItem("user"));
  return user ? user : null;

  }
  deleteUser(): void{
    const user = JSON.parse(<string>sessionStorage.getItem("user"));
if (user) {
  sessionStorage.removeItem("user");
}
  }
}
