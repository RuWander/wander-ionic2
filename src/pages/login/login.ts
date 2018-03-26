import { Component } from '@angular/core';
import {ViewChild} from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {SignupPage} from "../signup/signup";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  signIn(){
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
        .then(data => {
          console.log('got some data ' , data);
          this.navCtrl.push(HomePage);
        })
        .catch(error => {
          console.log('got an error ' , error)
        })

  }

    signUp(){
        this.navCtrl.push(SignupPage)
    }

}
