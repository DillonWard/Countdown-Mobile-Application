import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ScoresPage } from '../scores/scores';
import { PlayPage } from '../play/play';
import { HelpPage } from '../help/help';

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

  navigate(param){

    if(param == "play"){
      this.navCtrl.push(PlayPage)
    }
    else if(param == "scores"){
      this.navCtrl.push(ScoresPage)
    }
    else if(param == "help"){
      this.navCtrl.push(HelpPage)
    }
    else{
      console.log("no")
    }
  
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
