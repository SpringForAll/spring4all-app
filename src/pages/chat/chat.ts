import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";

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

  title: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, translateService: TranslateService) {
    translateService.get('TAB3_TITLE').subscribe(title => {
      this.title = title;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
