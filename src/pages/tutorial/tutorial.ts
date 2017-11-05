import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {TranslateService} from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  isLogined:boolean = true;
  dir: string = 'ltr';
  deadTime = 4;

  constructor(public navCtrl: NavController,
              translate: TranslateService,
              public platform: Platform) {
    this.dir = platform.dir();
    this.setTime();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION"
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.TUTORIAL_SLIDE1_TITLE,
            description: values.TUTORIAL_SLIDE1_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
            title: values.TUTORIAL_SLIDE2_TITLE,
            description: values.TUTORIAL_SLIDE2_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-2.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('TabsPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  setTime() {
    if (this.deadTime == 2) {
      this.deadTime--;
      return this.startApp();
    } else {
      this.deadTime--;
    }
    setTimeout(() => {
      this.setTime();
    }, 1000);
  }
}
