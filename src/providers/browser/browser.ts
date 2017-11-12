import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ThemeableBrowser} from 'ionic-native';
import {Constant} from '../constant/constant';


/*
  Generated class for the BrowserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Browser {

  target: string = '_blank';
  private options: any = {
    statusbar: {
      color: this.constant.colors_primary
    },
    toolbar: {
      height: 44,
      color: this.constant.colors_primary
    },
    title: {
      color: this.constant.colors_light,
      showPageTitle: true
    },
    backButton: {
      image: 'back',
      imagePressed: 'back_pressed',
      align: 'left',
      event: 'backPressed'
    },
    backButtonCanClose: true
    /* menu: {
       image: 'share',
       imagePressed: 'menu_pressed',
       title: '分享',
       cancel: '取消',
       align: 'right',
       items: [
         {
           event: 'helloPressed',
           label: 'Hello World!'
         },
         {
           event: 'testPressed',
           label: 'Test!'
         }
       ]
     }*/
  };

  constructor(public constant: Constant) {
  }

  launch(url) {
    return new ThemeableBrowser(url, this.target, this.options);
  }

  launchWithTaget(url, target) {
    this.target = target;
    return this.launch(url);
  }
}
