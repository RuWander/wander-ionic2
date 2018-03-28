import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { SignupPage} from "../pages/signup/signup";
import { ProfilePage } from "../pages/profile/profile";
import { QuestionDropPage } from "../pages/question-drop/question-drop";
import { ExperienceDropPage } from "../pages/experience-drop/experience-drop";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireStorageModule } from "angularfire2/storage";
import { Geolocation } from "@ionic-native/geolocation";
import {FirebaseObjectObservable} from "angularfire2/database-deprecated";
import { InterestserviceProvider } from '../providers/interestservice/interestservice';


const firebaseAuth = {
    apiKey: "AIzaSyBbhrW64iuPdIt5EgAkle5Y2iyFU3C4KGE",
    authDomain: "wanderbase-9613f.firebaseapp.com",
    databaseURL: "https://wanderbase-9613f.firebaseio.com",
    projectId: "wanderbase-9613f",
    storageBucket: "wanderbase-9613f.appspot.com",
    messagingSenderId: "697182673507"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    QuestionDropPage,
    ExperienceDropPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    //FirebaseObjectObservable
    //Geolocation
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    QuestionDropPage,
    ExperienceDropPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    InterestserviceProvider
  ]
})
export class AppModule {}
