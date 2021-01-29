import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private message: MessageService) { }

  handle(errorResponse: any) {       
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;
    } else if (errorResponse instanceof HttpErrorResponse
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
    
        msg = 'Ocorreu um erro ao processar a sua solicitação';

        try {
          msg = errorResponse.error.message;
        } catch (e) { }
    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }

    this.message.error(msg);
  }

}
