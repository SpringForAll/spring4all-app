import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {AdvertPage} from './advert';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    AdvertPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertPage),
    TranslateModule.forChild()
  ],
})
export class AdvertPageModule {
}
