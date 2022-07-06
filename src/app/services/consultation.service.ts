import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  baseUrl: string = 'http://localhost:3000/';
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
  
  listConsultants(){
    return this.http.get(this.baseUrl+ 'consultants');
  }
  requestConsultation(consultationRequestObj: any, consultantId:any){
    return this.http.post(this.baseUrl+ 'consultationReq/add/'+consultantId,consultationRequestObj,{headers: this.generateHedaer(),});
  }
}
