import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {

  public list: any;
  constructor(private navCtrl: NavController) {
this.list =[
  {
    name: 'milena',
    lastname: 'polania',
    email: 'micorreo@yahoo.com'
  }
]
  }

}
