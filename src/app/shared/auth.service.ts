import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httClient:HttpClient) {}

  public login(login:Login)
  {console.log("Again error")

    return this.httClient.post(environment.apiUrl+'login/token',login);
}
}
