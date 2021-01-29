import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastController: ToastController) { }

  async warning(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'warning',
    });
    toast.present();
  }

  async error(msg: any) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }

}
