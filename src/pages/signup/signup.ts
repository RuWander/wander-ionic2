import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {HomePage} from "../home/home";
import {User} from "../../models/user";
import {ProfilePage} from "../profile/profile";

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

    user = {} as User;

  constructor(private fireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async signUp(user: User){
    console.log('attempting to create user...');
    try {
        const result = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
        console.log(result);
        this.navCtrl.setRoot(ProfilePage);
    }
    catch(e){
          console.log('got error', e)
    }
  }

}
