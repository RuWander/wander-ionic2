import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private fireAuth: AngularFireAuth, public navCtrl: NavController) {

  }


  // signIn(){
  //   this.navCtrl.push(LoginPage)
  // }

  dropExperience(){
    console.log('You Dropped an Experience')
  }

  dropKnowledge(){
    console.log('You Dropped Knowledge')
  }

  dropQusetion(){
    console.log('You Dropped some Knowledge')
  }

  dropInnovation(){
    console.log('You Dropped an Innovation')
  }

  signOut() {
    console.log('you are being signed out')
      this.fireAuth.auth.signOut();
      this.navCtrl.setRoot(LoginPage);
  }

}
