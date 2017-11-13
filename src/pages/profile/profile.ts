import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Browser} from '../../providers/providers';
import {User} from "../../providers/user/user";

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

  private profile: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private user: User,
              public browser: Browser) {
    this.profile = this.user._user;
    console.log(this.profile)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openProjects() {
    let url = 'http://spring4all.com/projects';
    this.browser.launch(url);
  }
}
