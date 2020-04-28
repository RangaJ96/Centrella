import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserProperties } from './user-properties';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private findUserUrl:string;
  constructor(private http: HttpClient) {
    this.findUserUrl='http://localhost:8080/currentUser';
   }

   public findUser(): Observable<UserProperties> {
   
    return this.http.get<UserProperties>(this.findUserUrl);
   }
}
