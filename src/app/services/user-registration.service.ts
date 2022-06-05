import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  baseurl: string='http://localhost:3000/';
  
  constructor(private http:HttpClient) { }

  addUsers(UserObj: any){
     console.log(UserObj);
     return this.http.post(this.baseurl + 'users/' ,UserObj );
  }
}
