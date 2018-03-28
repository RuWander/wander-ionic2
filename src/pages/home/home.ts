import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from "ionic-angular";

import { LoginPage } from "../login/login";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {Profile} from "../../models/profile";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database-deprecated";

import {QuestionDropPage} from "../question-drop/question-drop";
import {ExperienceDropPage} from "../experience-drop/experience-drop";
import {Observable} from "rxjs/Observable";
import {ProfilePage} from "../profile/profile";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//FirebaseObject<Profile>;

    private drops: any[] = [
        {lat:-25.8127794,lng:28.122059499999998},
        {lat:-25.1127794,lng:28.222059499999998},
        {lat:-25.2127794,lng:28.322059499999998},
        {lat:-25.3127794,lng:28.422059499999998},
        {lat:-25.4127794,lng:28.522059499999998},
        {lat:-25.5127794,lng:28.622059499999998},
        {lat:-25.6127794,lng:28.722059499999998}

    ];


    lat: number = -25.8127794;
    lng: number = 28.322059499999998;
  profileData: FirebaseObjectObservable<Profile>;
  //profileD = {} as Object;
    profileItems: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, private toast: ToastController) {
      //this.afAuth.authState.take(1).subscribe(data => {
          // if(data && data.email && data.uid) {
          //     console.log(data.uid);
          //     this.profileItems = afDatabase.object(`profiles/${data.uid}`);
          //     console.log('this is profileItems');
          //     console.log(this.profileItems)
          // }});

  };

  ionViewWillLoad(){
    console.log('the home page loaded');
    this.afAuth.authState.take(1).subscribe(data => {
        if(data && data.email && data.uid){
            // this.toast.create({
            //     message: `Welcome To Wander ${data.email}`,
            //     duration:1000
            // }).present();
            //this.profileD = this.afDatabase.object(`profiles/${data.uid}`);
            //console.log(profileD);

            let profileItems = this.afDatabase.object(`profiles/${data.uid}`);
            console.log(profileItems);

        }else{
            this.toast.create({
                message: `Could not find authentication details.`,
                duration:1000
            }).present();
        }
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
