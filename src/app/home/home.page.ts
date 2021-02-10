import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

import { environment } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  usuario;

  constructor(private loginService: LoginService,
    private iab: InAppBrowser,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  logout() {
    this.loginService.logout();
  }

  testeRelatorio() {
    console.log('Teste relatório');

    let usuario = JSON.parse(localStorage.getItem('usuario'));

    let url = `${environment.servidor}/#/report/ui/multitec.relatorios.cgs.CGS_Naturezas/${usuario.hash}`

    this.iab.create(url, '_self', {location: 'no'});

    //browser.show();
  }

  telaRelatorio() {
    console.log('Tela relatório');

    this.navCtrl.navigateForward('relatorio')
  }

}
