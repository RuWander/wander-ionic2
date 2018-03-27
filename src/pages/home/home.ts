import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from "ionic-angular";

import { LoginPage } from "../login/login";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Profile} from "../../models/profile";
import {FirebaseObjectObservable} from "angularfire2/database";

import {QuestionDropPage} from "../question-drop/question-drop";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileData: FirebaseObject<Profile>;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, private toast: ToastController) {

  }

  ionViewWillLoad(){
    console.log('the home page loaded');
    this.afAuth.authState.take(1).subscribe(data => {
        if(data && data.email && data.uid){
            this.toast.create({
                message: `Welcome To Wander ${data.email}`,
                duration:3000
            }).present();
            this.profileData = this.afDatabase.object(`profiles/${data.uid}`);
        }else{
            this.toast.create({
                message: `Could not find authentication details.`,
                duration:3000
            }).present();
        }
    });

  }

  dropExperience(){
    console.log('You Dropped an Experience')
  }

  dropKnowledge(){
    console.log('You Dropped Knowledge')
  }

  dropQusetion(){
    console.log('You are dropping a Question');
    this.navCtrl.push(QuestionDropPage);
  }

  dropInnovation(){
    console.log('You Dropped an Innovation')
  }

  signOut() {
    console.log('you are being signed out')
      this.afAuth.auth.signOut();
      this.navCtrl.setRoot(LoginPage);
  }

}
