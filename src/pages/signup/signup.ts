import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {HomePage} from "../home/home";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    @ViewChild('username') username;
    @ViewChild('password') password;

  constructor(private fireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(){
    console.log('attemptinf to create user...');
    this.fireAuth.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
        .then(data =>{
          console.log('Got data ',data);
          this.navCtrl.push(HomePage)
        })
        .catch(error =>{
          console.log('got error', error)
        })
  }

}
