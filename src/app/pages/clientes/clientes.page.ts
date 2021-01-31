import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes;

  constructor(private clienteService: ClienteService,
    private error: ErrorHandlerService) { }

  ngOnInit() {
    this.clienteService.clientes().then((response: any) => {
      this.clientes = response;      
    }).catch((response) => {
      this.error.handle(response);
    }); 
  }

}
