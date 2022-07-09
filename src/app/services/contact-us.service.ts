import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  baseUrl :string='http://localhost:3000/';

  constructor(private http: HttpClient) { }

  generateHedaer() {
    var token = window.localStorage.getItem('token');
    const hedaerConfig = {
      'Content-type': 'application/json',
      Authorization:
      `Token ${token}`,
    };
    return new HttpHeaders(hedaerConfig);
  }


  listContacts(){
    return this.http.get(this.baseUrl + 'contact-us/');
  }

  listContactsbyFac(Faculty:any){
    return this.http.get(this.baseUrl +'contact-us/Faculty/' + Faculty);
  }


  viewContacts(id : String){
    return this.http.get(this.baseUrl + 'contact-us/'+ id , {
      headers: this.generateHedaer(),
    });
  }
}