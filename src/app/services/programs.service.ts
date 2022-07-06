import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  baseurl: string='http://localhost:3000/';
  
  constructor(private http:HttpClient) { }

  generateHedaer() {
    var token = window.localStorage.getItem('token');
    const hedaerConfig = {
      'Content-type': 'application/json',
      Authorization:
      `Token ${token}`,
    };
    return new HttpHeaders(hedaerConfig);
  }


  listComSessions(){
    return this.http.get(this.baseurl + 'comSessions/accepted');
  }

  listPastComsessions(){
    console.log("past programs")
    return this.http.get(this.baseurl + 'comSessions/past');
  }
  listPastPrograms(){
    console.log("past programs2")
    return this.http.get(this.baseurl + 'programs/past');
  }

  sendSessionRequest(sessionObj: any){
     return this.http.post(this.baseurl + 'comSessions/' ,sessionObj );
  }

  viewProgram(id : String){
    return this.http.get(this.baseurl + 'programs/'+ id );
  }

  registerEvent(data: any){
    return this.http.post(this.baseurl + 'registerEvent/' ,data, {
      headers: this.generateHedaer(),
    });
 }

 registerSession(data: any){
  return this.http.post(this.baseurl + 'registerSession/' ,data ,{
    headers: this.generateHedaer(),
  });
}

viewSession(id : String){
  return this.http.get(this.baseurl + 'comSessions/'+ id );
}

listProgramsbyCat(programCat: any){
  return this.http.get(this.baseurl +'programs/programType/' + programCat);
}

 
  
}
