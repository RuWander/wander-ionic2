import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionDropPage } from './question-drop';

@NgModule({
  declarations: [
    QuestionDropPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionDropPage),
  ],
})
export class QuestionDropPageModule {}
