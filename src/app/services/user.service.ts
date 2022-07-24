import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  listusers(): Observable<Users[]>{
    return this.http.get<Users[]>(environment.users)
  }
  getUsers ():Observable<Users[]> {
    return this.http.get<Users[]>(environment.users)
 }
  deleteUsers(id:number | string): Observable<any>{
    return this.http.delete(`${environment.users}/${id}`);
  }
}
