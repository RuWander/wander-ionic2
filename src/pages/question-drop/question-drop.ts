import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionDrop } from "../../models/questionDrop";

/**
 * Generated class for the QuestionDropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-drop',
  templateUrl: 'question-drop.html',
})
export class QuestionDropPage {

  drop = {} as QuestionDrop;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dropQuestion(){
    console.log(this.drop);
  }

}
