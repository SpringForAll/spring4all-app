import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ThemeableBrowser} from 'ionic-native';


/*
  Generated class for the BrowserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Browser {

  private options: any = {
    statusbar: {
      color: '#2eb3feff'
    },
    toolbar: {
      height: 44,
      color: '#2eb3feff'
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
    forwardButton: {
      image: 'forward',
      imagePressed: 'forward_pressed',
      align: 'left',
      event: 'forwardPressed'
    },
    closeButton: {
      image: 'close',
      imagePressed: 'close_pressed',
      align: 'left',
      event: 'closePressed'
    },
    customButtons: [
      {
        image: 'share',
        imagePressed: 'share_pressed',
        align: 'right',
        event: 'sharePressed'
      }
    ],
    menu: {
      image: 'menu',
      imagePressed: 'menu_pressed',
      title: 'Test',
      cancel: 'Cancel',
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
    },
    backButtonCanClose: true
  };

  target: string = '_blank';

  constructor(private url: string, target: string) {
    this.target = target;
  }

  launch() {
    return new ThemeableBrowser(this.url, this.target, this.options);
  }
}
