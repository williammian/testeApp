import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private navCtrl : NavController) { }

  login(login: any) {
    let servidor = login.servidor;
    localStorage.setItem("servidor", servidor);
    environment.servidor = servidor;

    let url = `${environment.servidor}/cas0101`;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, login, { headers: headers }).toPromise();
  }

  logout() {
    localStorage.removeItem('usuario');
    this.navCtrl.navigateForward('login', { replaceUrl:true });
  }

}
