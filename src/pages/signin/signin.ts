import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomPage } from  '../room/room';
//login//
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  data = { nickname:"" };
  loginForm: FormGroup;
	loginError: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, private auth: AuthService) {
    this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  enterNickname() {
    this.navCtrl.setRoot(RoomPage, {
      nickname: this.data.nickname
    });
  }
  login() {
		let data2 = this.loginForm.value;

		if (!data2.email) {
			return;
		}

		let credentials = {
			email: data2.email,
			password: data2.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(RoomPage , { nickname: data2.email}),
				error => this.loginError = error.message
			);
	}
  signup(){
  this.navCtrl.push(SignupPage);
}

}
