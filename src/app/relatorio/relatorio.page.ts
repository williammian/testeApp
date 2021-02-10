import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.page.html',
  styleUrls: ['./relatorio.page.scss'],
})
export class RelatorioPage implements OnInit {

  url: SafeResourceUrl;
  servidor :string;

  constructor(private iab: InAppBrowser, 
    public sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    let usuario = JSON.parse(localStorage.getItem('usuario'));

    let urlOrigem = `${environment.servidor}/#/report/ui/multitec.relatorios.cgs.CGS_Naturezas/${usuario.hash}`

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(urlOrigem);

    console.log(this.url);
    console.log(environment.servidor);

    this.servidor = environment.servidor;
  }

}
