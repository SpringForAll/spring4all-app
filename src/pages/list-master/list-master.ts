import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, Slides} from 'ionic-angular';

import {Item} from '../../models/item';
import {Items} from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {

  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  openSearch() {
    let serchModal = this.modalCtrl.create('SearchPage');
    serchModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    serchModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
