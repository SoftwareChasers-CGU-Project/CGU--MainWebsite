import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  baseurl: string='http://localhost:3000/';
  
  constructor(private http:HttpClient) { }

  listPrograms(){
    return this.http.get(this.baseurl + 'programs/');
  }

  sendSessionRequest(sessionObj: any){
     return this.http.post(this.baseurl + 'comSessions/' ,sessionObj );
  }

  viewProgram(id : String){
    return this.http.get(this.baseurl + 'programs/'+ id );
  }
  
}
