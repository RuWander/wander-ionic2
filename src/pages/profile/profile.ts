import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Profile} from "../../models/profile";
import {HomePage} from "../home/home";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDataBase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  createProfile(){

    console.log(this.profile);
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDataBase.object(`profiles/${auth.uid}`).set(this.profile)
          .then(() => this.navCtrl.setRoot(HomePage))
    })
  }

}
