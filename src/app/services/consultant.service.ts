import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  listConsultants(){
    return this.http.get(this.baseUrl+ 'consultants/list');
      //this users should be chnaged according to our requirments 
  }
}


