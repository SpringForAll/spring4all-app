import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {Api} from "../../providers/api/api"

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  title: string = '';
  slideData: Array<any> = [];
  pages: Array<any> = [];

  constructor(translateService: TranslateService, public navCtrl: NavController, public navParams: NavParams,public api:Api) {
    translateService.get('TAB1_TITLE').subscribe(title => {
      this.title = title;
    });
    this.getSlides();
    this.getPages();
  }

  ionViewWillEnter() {
    this.slides.startAutoplay();
  }

  ionViewWillLeave() {
    this.slides.stopAutoplay();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getPages() {
    let seq = this.api.get('pages').share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.success) {
        this.pages = res.data;
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  //获取幻灯片
  getSlides() {
    let seq = this.api.get('slides').share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.success) {
        this.pages = res.data;
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  goSearch(event){
    console.log(event)
    console.log("go search")
  }
}
