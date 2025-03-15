import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  getUsers(){
    return this.http.get("http://localhost:3000/api/users")
  }
  login(email: string, password: string){
    return this.http.post("http://localhost:3000/api/users/login", {
      email,
      password
    })
  }
  // lidhja e frontit edhe backend bohet te servicet
}