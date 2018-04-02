import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { EasyPage } from '../easy/easy';
import { MediumPage } from '../medium/medium';
import { HardPage } from '../hard/hard';

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
        text:"Easy",
        id: "play",
        icon: "ios-star-outline",
        md: "md-star-outline"
      },
      {
        text: "Medium",
        id: "scores",
        icon: "ios-star-half",
        md: "md-star-half"
      },
      {
        text: "Hard",
        id: "help",
        icon: "ios-star",
        md: "md-star"
      }
    ]

  }

  navigate(param){

    if(param == "play"){
      this.navCtrl.push(EasyPage)
    }
    else if(param == "scores"){
      this.navCtrl.push(MediumPage)
    }
    else if(param == "help"){
      this.navCtrl.push(HardPage)
    }
    else{
      console.log("no")
    }
  
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
