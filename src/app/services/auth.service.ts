import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeSignupRequest, TypeSignupResponse } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  login(data: TypeLoginRequest): Observable<TypeLoginResponse>{
    return this.http.post<TypeLoginResponse>(environment.login, data);
  }
  signup(data: TypeSignupRequest): Observable<TypeSignupResponse>{
    return this.http.post<TypeSignupResponse>(environment.signup,data);
  }
}
