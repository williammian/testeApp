import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  clientes() {
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    
    let url = `${environment.servidor}${environment.urlBase}Clientes`;
    let headers = new HttpHeaders({ 'x-auth-token': usuario.hash });

    return this.http.get(url, { headers: headers }).toPromise();
  }
}
