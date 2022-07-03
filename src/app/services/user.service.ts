import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/auth/users/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'undergraduates', { responseType: 'text' });
  }
  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }
  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }
}
