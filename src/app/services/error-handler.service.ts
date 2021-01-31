import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private message: MessageService,
    private loginService: LoginService) { }

  handle(errorResponse: any) {       
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof HttpErrorResponse
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
    
        msg = 'Ocorreu um erro ao processar a sua solicitação';

        if (errorResponse.status === 401 || errorResponse.status === 403) {
          msg = 'Você não tem permissão para executar esta ação';
          this.loginService.logout();
        }else {

          try {
            msg = errorResponse.error.message;
          } catch (e) { }
  
        }

        console.error('Ocorreu uma falha', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }

    this.message.error(msg);
  }

}
