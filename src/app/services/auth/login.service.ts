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
      headers:{
        "Content-Type": "application/json",
      }
    })
  }

  LoginV2(credenciales: LoginUser): Observable<any> {
    return this.http.post(this.url + "/login/v2", credenciales, {
      headers:{
        "Content-Type": "application/json",
      }
    })
  }
}
