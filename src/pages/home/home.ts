import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Slides} from 'ionic-angular';
import { ThemeableBrowser } from 'ionic-native';
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

  slideData: Array<any> = [];
  pages: Array<any> = [];
  loadError: string = ' ';

  constructor(public translateService: TranslateService, public navCtrl: NavController, public navParams: NavParams,
              public api: Api, public modalController: ModalController) {
    this.getSlides();
    this.getPages();
    this.translateService.get('LOADING_ERROR').subscribe((value) => {
      this.loadError = value;
    })
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

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.pages = [];
      this.getPages();
      refresher.complete();
    }, 500);
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.getPages()
      infiniteScroll.complete();
    }, 500);
  }

  getPages() {
    let seq = this.api.get('pages').share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.success) {
        this.pages = this.pages.concat(res.data);
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  //
  getSlides() {
    let seq = this.api.get('slides').share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.success) {
        this.slideData = res.data;
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  openSearch() {
    let modal = this.modalController.create("SearchPage");
    modal.present();
  }

  openPages(url) {
    let options = {
      statusbar: {
        color: '#f8285c'
      },
      toolbar: {
        height: 44,
        color: '#f8285c'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      backButtonCanClose: true
    };
    let browser = new ThemeableBrowser(url, '_self', options);
  }
}
