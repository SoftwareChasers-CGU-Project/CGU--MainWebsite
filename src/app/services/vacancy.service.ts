import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  // baseurl: string='https://jsonplaceholder.cypress.io/';
  baseurl: string='http://localhost:3000/';
  
  constructor(private http:HttpClient) { }

  listVacancies(){
    // this.http.get(this.baseurl + 'vacancies');
    // return this.http.get(this.baseurl + 'users/');
    return this.http.get(this.baseurl + 'vacancies/');
  }
  ViewVacancies(vacancyId:String){
    console.log(vacancyId);
    return this.http.get(this.baseurl +'vacancies/' + vacancyId);
  }

  addVacancies(vacancyObj: any){
    //  return this.http.post(this.baseurl + 'users/' , vacancyObj );
     return this.http.post(this.baseurl + 'vacancies/' ,vacancyObj );
  }

  deleteVacancies(vacancyId: any){
    console.log(vacancyId);
    return this.http.delete(this.baseurl + 'vacancies/' + vacancyId);
  }

  acceptVacancies(vacancyId: any){
    return this.http.put(this.baseurl + 'vacancies/'  , vacancyId);
  }

  listPendingVacancies(){
    // this.http.get(this.baseurl + 'vacancies');
    // return this.http.get(this.baseurl + 'users/');
    return this.http.get(this.baseurl + 'vacancies/pendingVacancy/');
  }

  listAcceptedVacancies(){
    // this.http.get(this.baseurl + 'vacancies');
    // return this.http.get(this.baseurl + 'users/');
    return this.http.get(this.baseurl + 'vacancies/acceptedvacancy');
  }

  applyVacancies(vacancyObj: any){
    //  return this.http.post(this.baseurl + 'users/' , vacancyObj );
     return this.http.post(this.baseurl + 'vacancies/apply/',vacancyObj );
  }
}



