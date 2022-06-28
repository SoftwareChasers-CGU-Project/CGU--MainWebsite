import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  baseurl: string='http://localhost:3000/';
  
  constructor(private http:HttpClient) { }


  listComSessions(){
    return this.http.get(this.baseurl + 'comSessions/accepted');
  }

  listPastComsessions(){
    return this.http.get(this.baseurl + 'comSessions/past');
  }
  listPastPrograms(){
    return this.http.get(this.baseurl + 'programs/past');
  }

  sendSessionRequest(sessionObj: any){
     return this.http.post(this.baseurl + 'comSessions/' ,sessionObj );
  }

  viewProgram(id : String){
    return this.http.get(this.baseurl + 'programs/'+ id );
  }

  registerEvent(data: any){
    return this.http.post(this.baseurl + 'registerEvent/' ,data);
 }

 registerSession(data: any){
  return this.http.post(this.baseurl + 'registerSession/' ,data);
}

viewSession(id : String){
  return this.http.get(this.baseurl + 'comSessions/'+ id );
}

listProgramsbyCat(programCat: any){
  return this.http.get(this.baseurl +'programs/programType/' + programCat);
}

 
  
}
