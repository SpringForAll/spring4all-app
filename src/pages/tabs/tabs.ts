import {Component, ViewChild} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {IonicPage, NavController, Tabs} from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;

  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";

  tab4Badge = 0;

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['HOME_TITLE', 'CHAT_TITLE', 'NEWS_TITLE','PROFILE_TITLE']).subscribe(values => {
      this.tab1Title = values['HOME_TITLE'];
      this.tab2Title = values['NEWS_TITLE'];
      this.tab3Title = values['CHAT_TITLE'];
      this.tab4Title = values['PROFILE_TITLE'];
    });
    this.tab4Badge = 2;
  }
}
