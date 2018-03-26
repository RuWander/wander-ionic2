import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  signIn(){
    this.navCtrl.push(LoginPage)
  }

  signUp(){
      this.navCtrl.push(SignupPage)
  }

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

}
