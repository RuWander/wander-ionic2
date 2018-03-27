import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {SignupPage} from "../signup/signup";
import {HomePage} from "../home/home";
import {User} from "../../models/user";

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

    user = {} as User;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async signIn(user: User){
      console.log('Attempting to login');
      try {
          const result = await this.fire.auth.signInWithEmailAndPassword(user.email, user.password);

          console.log('got some data ' , result);
          this.navCtrl.setRoot(HomePage);
      }
      catch(e) {
          console.log('got an error ' , e)
      }

  }

    signUp(){
        this.navCtrl.push(SignupPage);
    }

}
