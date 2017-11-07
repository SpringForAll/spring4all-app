import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Browser } from '../../providers/providers';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public browser: Browser) {
  }
  items = [
    'Fallout',
    'GTA',
    'Halo'
  ];
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  profile = {
    "avatar": "http://jxjy.gsres.cn/uploads/honeybee/data/upload/group/b_group_avatar_5786.jpg",
    "userName": "杨小强",
    "sex": 0
  }

  openProjects() {
    let url = 'http://spring4all.com/projects';
    this.browser.launch(url);
  }
}
