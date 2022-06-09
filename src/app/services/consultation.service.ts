import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  listConsultants(){
    return this.http.get(this.baseUrl+ 'consultants/list');
  }
  requestConsultation(consultationRequestObj: any){
    return this.http.post(this.baseUrl+ 'consultationReq/add',consultationRequestObj);
  }
}
