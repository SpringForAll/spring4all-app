import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Slides, ToastController} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {Api} from "../../providers/api/api"
import {Browser} from "../../providers/browser/browser"

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
  private networkErrorString: string;

  constructor(public translateService: TranslateService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public api: Api,
              public toastCtrl: ToastController,
              public modalController: ModalController,
              public browser: Browser) {
    this.getSlides();
    this.getPages();
    this.translateService.get('NETWORK_ERROR').subscribe((value) => {
      this.loadError = value;
    });
    this.translateService.get('NETWORK_ERROR').subscribe((value) => {
      this.networkErrorString = value;
    });
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
      } else {
        this.showToast().present();
      }
    }, err => {
      this.showToast().present();
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
      }else{
        this.showToast().present();
      }
    }, err => {
      this.showToast().present();
      console.error('ERROR', err);
    });
    return seq;
  }

  openSearch() {
    let modal = this.modalController.create("SearchPage");
    modal.present();
  }

  openPages(url) {
    this.browser.launch(url);
  }

  showToast() {
    return this.toastCtrl.create({
      message: this.networkErrorString,
      duration: 3000,
      position: 'top'
    });
  }
}
