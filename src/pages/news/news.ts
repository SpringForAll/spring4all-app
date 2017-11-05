import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Api } from "../../providers/api/api"
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  type: string = "question";
  questions: Array<any> = [];
  hotTips: Array<any> = [];
  private networkErrorString: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public translateService: TranslateService,
    public toastCtrl: ToastController,
    public api: Api) {
    this.translateService.get('NETWORK_ERROR').subscribe((value) => {
      this.networkErrorString = value;
    });
    this.getQuestions();
    this.getHotTips();
  }

  getQuestions() {
    let param = { 'key': 'value' }
    let seq = this.api.get('questions', param).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.success) {
        this.questions = this.questions.concat(res.data);
      } else {
        this.showToast().present();
      }
    }, err => {
      this.showToast().present();
      console.error('ERROR', err);
    });
    return seq;
  }

  getHotTips() {
    let seq = this.api.get('hottips').share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.success) {
        this.hotTips = this.hotTips.concat(res.data);
      } else {
        this.showToast().present();
      }
    }, err => {
      this.showToast().present();
      console.error('ERROR', err);
    });
    return seq;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  showToast() {
    return this.toastCtrl.create({
      message: this.networkErrorString,
      duration: 3000,
      position: 'top'
    });
  }

}