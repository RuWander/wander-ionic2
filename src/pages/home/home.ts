import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from "ionic-angular";

import { LoginPage } from "../login/login";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database-deprecated";
import {Profile} from "../../models/profile";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database-deprecated";

import {QuestionDropPage} from "../question-drop/question-drop";
import {ExperienceDropPage} from "../experience-drop/experience-drop";
import {Observable} from "rxjs/Observable";
import {ProfilePage} from "../profile/profile";
import {ExperiencedropProvider} from "../../providers/experiencedrop/experiencedrop";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    lat: number = -25.8127794;
    lng: number = 28.322059499999998;
    profileData: FirebaseObjectObservable<Profile>;
    profileItems: Observable<any>;
    experiencedDrops: FirebaseListObservable<any[]>;
    questionDrops: FirebaseListObservable<any[]>;

  constructor(private experienceProvider: ExperiencedropProvider,private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, private toast: ToastController) {

  };

  ionViewWillLoad(){
    console.log('the home page loaded');
    this.afAuth.authState.take(1).subscribe(data => {
        if(data && data.email && data.uid){

            let profileIs = this.afDatabase.object(`profiles/${data.uid}`).subscribe(x => {
                console.log(x);
                this.profileItems = x;
            })

        }else{
            this.toast.create({
                message: `Could not find authentication details.`,
                duration:1000
            }).present();
        }
    });

    //this.items = this.experienceProvider.getAllExperiences();
      let items = this.afDatabase.list('/experiencedrops').subscribe(x => {
          console.log(x);
          this.experiencedDrops = x;
      });
      let items2 = this.afDatabase.list('/questiondrops').subscribe(x => {
          console.log(x);
          this.questionDrops = x;
      });
  }

  dropExperience(){
    console.log('You Dropped an Experience')
      this.navCtrl.push(ExperienceDropPage);
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
    gotoProfile() {console.log('you are being signed out')
        this.afAuth.auth.signOut();
        this.navCtrl.push(ProfilePage);
    }

}
