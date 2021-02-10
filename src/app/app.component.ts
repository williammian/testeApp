import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Início',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Clientes',
      url: 'clientes',
      icon: 'people'
    }
    
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private iab: InAppBrowser
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  testeRelatorio() {
    console.log('Teste relatório');
    
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    let headers = new HttpHeaders({ 'x-auth-token': usuario.hash });

    let url = `${environment.servidor}/#/report/ui/multitec.relatorios.cgs.CGS_Naturezas`

    this.http.get(url, { headers: headers }).toPromise()
    .then(response => console.log(response))
    .catch(response => console.log(response));
  }

  testeRelatorio2() {
    console.log('Teste relatório 2');

    let usuario = JSON.parse(localStorage.getItem('usuario'));
   
    let url = `${environment.servidor}/#/report/ui/multitec.relatorios.cgs.CGS_Naturezas/${usuario.hash}`

    window.open(url, '_blank');
    //url,
    //target, '_self' '_blank' '_system'
    //options
    
  }

  testeRelatorio3() {
    console.log('Teste relatório 3');

    let usuario = JSON.parse(localStorage.getItem('usuario'));

    let url = `${environment.servidor}/#/report/ui/multitec.relatorios.cgs.CGS_Naturezas/${usuario.hash}`

    const browser = this.iab.create(url);

    browser.show();  
  }

}
