import { SigninPage } from './../pages/signin/signin';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';



export const config = { fire:{
  apiKey: 'AIzaSyA24kRcp1yJTLze660n9ARfQ_Lwp-A_WY8',
  authDomain: 'brackets-30b18.firebaseapp.com',
  databaseURL: 'https://brackets-30b18.firebaseio.com',
  projectId: 'brackets-30b18',
  storageBucket: 'brackets-30b18.appspot.com',
  messagingSenderId: "644709498963"
}
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();
    });
    if (!firebase.apps.length) {
    firebase.initializeApp(config.fire);
  }
  }

}
