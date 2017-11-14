import {Component, ViewChild} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateService} from '@ngx-translate/core';
import {Config, Nav, Platform, ToastController} from 'ionic-angular';
import {AdvertPage, FirstRunPage} from '../pages/pages';
import {TabsPage} from "../pages/tabs/tabs";
import {User} from '../providers/providers';

@Component({
  template: `
    <ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;
  backButtonPressed: boolean = false;

  @ViewChild(Nav) nav: Nav;

  constructor(private translate: TranslateService,
              public platform: Platform,
              private toastCtrl: ToastController,
              public config: Config,
              private statusBar: StatusBar,
              private user: User,
              private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.hide();
      this.splashScreen.hide();
      this.registerBackButtonAction();
      this.registerAuthentication();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('zh');

    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use('zh'); // Set your language here
      // this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('zh'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  registerAuthentication() {
    this.user.getToken().then(token=>{
      if (token) {
        return this.rootPage = AdvertPage;
      }
      return this.rootPage = FirstRunPage;
    })
  }

  registerBackButtonAction() {
    this.platform.registerBackButtonAction((): any => {
      let activeVC = this.nav.getActive();
      let page = activeVC.instance;
      if (!(page instanceof TabsPage)) {
        if (!this.nav.canGoBack()) {
          //当前页面为tabs，退出APP
          return this.showExit();
        }
        //当前页面为tabs的子页面，正常返回
        return this.nav.pop();
      }
      let tabs = page.tabs;
      let activeNav = tabs.getSelected();
      if (!activeNav.canGoBack()) {
        //当前页面为tab栏，退出APP
        return this.showExit();
      }
      //当前页面为tab栏的子页面，正常返回
      return activeNav.pop();
    }, 101);
  }

  //双击退出提示框
  showExit() {
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
      let toast = this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      this.backButtonPressed = true;
      //2秒内没有再次点击返回则将触发标志标记为false
      setTimeout(() => {
        this.backButtonPressed = false;
      }, 2000)
    }
  }
}
