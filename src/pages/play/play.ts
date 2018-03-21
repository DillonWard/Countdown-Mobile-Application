import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equation } from '../../models/equations';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage implements OnInit {


  constructor(public navCtrl: NavController, public navParams: NavParams, private speechRecognition: SpeechRecognition, private changeRef: ChangeDetectorRef) {
  }

  newEquation: Equation = {
    answer: undefined,
    equationVariables: [undefined],
    equationSign: undefined
  }

  startDisplay = true;
  duration = 4;
  seconds = "";
  clockDisplay: string;
  equationVars = [];
  matches: String[];
  tempSum = 0;

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  generateEquation() {

    for (var i = 0; i < 2; i++) {

      this.newEquation.equationVariables.push(Math.floor(Math.random() * 9) + 1);
      console.log(this.newEquation.equationVariables[i])
      this.equationVars[i] = this.newEquation.equationVariables[i];

    }


    this.newEquation.equationSign = Math.floor(Math.random() * 2) + 1;
    console.log(this.newEquation.equationSign);

    switch (this.newEquation.equationSign) {
      case 1:
        this.add(this.newEquation.equationVariables[0], this.newEquation.equationVariables[1]);
        console.log("add")
        break;
      
        case 2:
        this.subtract(this.newEquation.equationVariables[0], this.newEquation.equationVariables[1]);
        console.log("subtract")
        break;
    }


    console.log("Signs generated")


  }


  add(paramOne, paramTwo) {

    this.newEquation.answer = paramOne + paramTwo;
  }

  subtract(paramOne, paramTwo) {

    this.newEquation.answer = paramOne - paramTwo;
  }


  startListening() {
    this.speechRecognition.startListening().subscribe(matches => {
      console.log("Listening.")
      this.matches = matches;
      this.changeRef.detectChanges();
    });
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

        if (this.clockDisplay == "-1") {
          this.startDisplay = false;
          clearInterval(myInterval);
        }
      }, 1000);

    }
  }

  back() {
    this.navCtrl.pop()
    this.speechRecognition.stopListening().then(() => {
      console.log("Stopped.")
    });
  }



  ngOnInit() {
    this.tickTick();
    this.generateEquation();
    this.getPermission();

    for (var i = 0; i < this.newEquation.equationVariables.length; i++) {
      console.log(this.newEquation.equationVariables[i]);
    }

  }

}
