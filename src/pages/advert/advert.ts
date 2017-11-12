import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AdvertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advert',
  templateUrl: 'advert.html',
})
export class AdvertPage {
  deadTime = 3;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setTime();
  }

  setTime() {
    if (this.deadTime == 2) {
      this.deadTime--;
      return this.startApp();
    } else {
      this.deadTime--;
    }
    setTimeout(() => {
      this.setTime();
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvertPage');
  }

  startApp() {
    this.navCtrl.setRoot('TabsPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }
}
