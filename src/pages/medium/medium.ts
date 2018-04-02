import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-medium',
  templateUrl: 'medium.html',
})
export class MediumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  back(){
    this.navCtrl.pop()
  }

}