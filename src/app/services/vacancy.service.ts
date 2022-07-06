import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VacancyService {
  baseurl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}
  
  generateHedaer() {
    var token = window.localStorage.getItem('token');
    const hedaerConfig = {
      'Content-type': 'application/json',
      Authorization:
      `Token ${token}`,
    };
    return new HttpHeaders(hedaerConfig);
  }

  listVacancies() {
    return this.http.get(this.baseurl + 'vacancies/');
  }

  ViewVacancies(vacancyId: String) {
    return this.http.get(this.baseurl + 'vacancies/acceptedvacancies/' + vacancyId);
  }

  addVacancies(vacancyObj: any) {
    return this.http.post(this.baseurl + 'vacancies/', vacancyObj);
  }

  deleteVacancies(vacancyId: any) {
    return this.http.delete(this.baseurl + 'vacancies/' + vacancyId);
  }

  acceptVacancies(vacancyId: any) {
    return this.http.put(this.baseurl + 'vacancies/', vacancyId);
  }

  listPendingVacancies() {
    return this.http.get(this.baseurl + 'vacancies/pendingVacancy/');
  }

  listAcceptedVacancies() {
    return this.http.get(this.baseurl + 'vacancies/acceptedvacancies');
  }

  applyVacancies(cvObj: any) {
    return this.http.post(this.baseurl + 'vacancies/apply', cvObj, {
      headers: this.generateHedaer(),
    });
  }

  listVacanciesbyType(vacancyType: any) {
    return this.http.get(this.baseurl + 'vacancies/filterVacancies/' + vacancyType);
  }
}
