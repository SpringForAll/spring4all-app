import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    TranslateModule.forChild(ChatPage)
  ],
})
export class ChatPageModule {}
