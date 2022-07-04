import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getRole() {
    var payLoad = JSON.parse(
      window.atob(localStorage.getItem('token')!.split('.')[1])
    );
    var userRole = payLoad.role;
    return userRole;
  }


  roleMatch(allowedRoles:any): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token')!.split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach((element: any) => {
      if (userRole == element) {
        isMatch = true;
      }
    });
    return isMatch;
  }
  login(userValue: any): Observable<any> {
    var email: string[] = userValue.email;
    var undergradPassword: string[] = userValue.undergradPassword;
    console.log(email);
    console.log(undergradPassword);
    return this.http.post(
      AUTH_API + 'login',
      {
        email,
        undergradPassword,
      },
      httpOptions
    );
  }
}
