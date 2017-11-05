import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {IonCardListComponent} from './ion-card-list/ion-card-list';

@NgModule({
  declarations: [IonCardListComponent],
  imports: [],
  exports: [IonCardListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
