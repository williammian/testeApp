import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ErrorHandlerService } from '../services/error-handler.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  servidor;

  constructor(private navCtrl : NavController, 
    private loginService: LoginService,
    private error: ErrorHandlerService,
    public menuCtrl: MenuController) {
      localStorage.removeItem('usuario');
      this.menuCtrl.swipeGesture(false);
    }

  ngOnInit() {
    this.servidor = localStorage.getItem('servidor');
  }

  login(form){
    this.loginService.login(form.value).then((response: any) => {
      
      let usuario = `{ "nome": "${response.nome}", "hash": "${response.hash}", "empresa": "${response.empresa}"}`;
      localStorage.setItem("usuario", usuario);
           
      this.navCtrl.navigateForward('home');
    }).catch((response) => {
      this.error.handle(response);
    });    
  }

}
