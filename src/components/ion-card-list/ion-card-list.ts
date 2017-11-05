import {Component, Input} from '@angular/core';

/**
 * Generated class for the IonCardListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-card-list',
  templateUrl: 'ion-card-list.html'
})
export class IonCardListComponent {
  @Input() text: string;

  constructor() {
    console.log('Hello IonCardListComponent Component');
    this.text = 'Hello World';
  }

}
