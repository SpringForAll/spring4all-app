import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';
import {Api} from '../../providers/providers';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  private datas: Array<any> = [];
  private networkErrorString: string;

  constructor(public translateService: TranslateService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public api: Api,
              public toastCtrl: ToastController,
              public modalController: ModalController) {
    this.getDatas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.getDatas()
      infiniteScroll.complete();
    }, 500);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.datas = [];
      this.getDatas();
      refresher.complete();
    }, 500);
  }

  getDatas() {
    let seq = this.api.get('pages').share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.success) {
        this.datas = this.datas.concat(res.data);
      } else {
        this.showToast().present();
      }
    }, err => {
      this.showToast().present();
      console.error('ERROR', err);
    });
    return seq;
  }

  showToast() {
    return this.toastCtrl.create({
      message: this.networkErrorString,
      duration: 3000,
      position: 'top'
    });
  }
}
