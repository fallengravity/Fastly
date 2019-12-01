import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Doing this will remove your account from our systems. All data associated with your account will be unrecoverable.',
      mode: "ios",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (cancel) => {
            console.log('User Canceled');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('User Confirmed');
          }
        }
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
