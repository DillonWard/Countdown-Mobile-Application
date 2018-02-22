import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HelpPage } from '../help/help';

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage implements OnInit{

  gameTimer: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  startTime = function(param){


    setInterval(function(){
      if (param != 0){
        param--;
      }
      this.startTime = param
    }, 1000);

    return param;
  }

  ngOnInit(){
    this.startTime(3)

  }

  back(){
    this.navCtrl.pop()
  }
}
