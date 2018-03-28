import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { QuestionDrop } from "../../models/questionDrop";
import { AngularFireAuth } from "angularfire2/auth";
import { Geolocation } from "@ionic-native/geolocation";
import { AngularFireDatabase } from "angularfire2/database-deprecated";
import {HomePage} from "../home/home";


@IonicPage()
@Component({
  selector: 'page-question-drop',
  templateUrl: 'question-drop.html',
})
export class QuestionDropPage {

  drop = {} as QuestionDrop;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private afDataBase: AngularFireDatabase, private geolocation: Geolocation, private toast: ToastController) {
  }

    ionViewWillLoad(){
        console.log('Question Drop page loaded');
        this.afAuth.authState.take(1).subscribe(data => {
            if(data && data.email && data.uid){
                this.drop.owner = data.uid;
            }
        });

    }

  async dropQuestion(){
        console.log('Getting Location');
        try {
            const result = await this.geolocation.getCurrentPosition()
            this.drop.lat = result.coords.latitude;
            this.drop.lng = result.coords.longitude;
            console.log(result);
            console.log(this.drop);
            console.log('Saving to DB');

            this.afDataBase.list(`questiondrops/`).push(this.drop)
                .then(() => {
                    this.navCtrl.setRoot(HomePage)
                    this.toast.create({
                        message: `Your Pin was dropped successfully`,
                        duration:1000
                    }).present();
                })


        }
        catch(e){
            console.log('Error getting location', e);
        }

  }

}
