import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SearchPage} from './search';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    TranslateModule.forChild()
  ],
})
export class SearchPageModule {
}
