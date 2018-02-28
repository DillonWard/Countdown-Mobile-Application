import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { Equation } from '../../models/equations';

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  newEquation: Equation = {
    answer: undefined,
    equationVariables: [undefined]
  }
 
  startDisplay = true;
  duration = 4;
  seconds = "--";
  clockDisplay: string;
  equationVars = [];

  ngOnInit() {
    this.tickTick();
    this.generateEquation();

    this.equationVars =
    [
      {
        num: this.newEquation.equationVariables[0]
      },
      {
        num: this.newEquation.equationVariables[1]
      },
      {
        num: this.newEquation.equationVariables[2]
      },
      {
        num: this.newEquation.equationVariables[3]
      },
      {
        num: this.newEquation.equationVariables[4]
      },
      {
        num: this.newEquation.equationVariables[5]
      },
      {
        num: this.newEquation.equationVariables[6]
      },
    ]
  }


  generateEquation(){

    for(var i = 0; i < 6; i++){

      this.newEquation.equationVariables.push(Math.floor(Math.random() * 9) + 1);
    }
  }

  tickTick() {

    if (this.duration > 0) {
      var myInterval = setInterval(() => {
        this.duration = this.duration - 1;
        if (this.duration % 60 < 10) {
          this.seconds = "" + this.duration % 60;
        } else {
          this.seconds = (this.duration % 60).toString();
        }
        this.clockDisplay = this.seconds;

        if(this.clockDisplay == "-1"){
          this.startDisplay = false;
          clearInterval(myInterval);
        }
  
      }, 1000);
      
    }
  }


  back() {
    this.navCtrl.pop()
  }
}
