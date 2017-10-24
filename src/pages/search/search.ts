import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

}
