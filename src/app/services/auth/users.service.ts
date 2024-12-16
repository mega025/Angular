import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:String = 'http://localhost:8080/api/users';


  constructor(
    private http: HttpClient,
  ) { }

  AllUsers(): Observable<any>{
    return this.http.get( 'http://localhost:8080/api/users');
  }
}
