import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ErrorHandlerService } from '../services/error-handler.service';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl : NavController, 
    private loginService: LoginService,
    private storage: StorageService,
    private error: ErrorHandlerService) { }

  ngOnInit() {
  }

  login(form){    
    this.loginService.login(form.value).then((response: any) => {
      
      let hash = response.hash;
      this.storage.set("hash", hash);
      console.log(hash);

      this.storage.get("hash")
      .then(
        data => console.log(data)
      );
     
      this.navCtrl.navigateForward('home');
    }).catch((response) => {
      this.error.handle(response);
    });    
  }

}
