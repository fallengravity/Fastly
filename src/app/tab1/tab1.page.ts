import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MainModalPage } from '../main-modal/main-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  otherUser = 'Fallen Gravity';
  dataReturned: any;

  constructor(
    public modalController: ModalController
  ) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: MainModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
}
