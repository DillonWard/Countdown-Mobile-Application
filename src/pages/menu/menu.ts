import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage implements OnInit{

  buttons: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.buttons = [
      {
        text:"Play",
        id: "play",
        icon: "fa fa-play"
      },
      {
        text: "Scores",
        id: "scores",
        icon: "fa fa-align-justify"
      },
      {
        text: "Help",
        id: "help",
        icon: "fa fa-question"
      }
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
