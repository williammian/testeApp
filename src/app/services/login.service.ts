import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: any) {
    let url = 'http://localhost:9000/cas0101';
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, login, { headers: headers }).toPromise();
  }

}
