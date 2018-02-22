import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html',
})
export class ScoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  back(){
    this.navCtrl.pop()
  }

}
