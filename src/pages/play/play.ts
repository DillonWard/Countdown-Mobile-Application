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
    score: undefined,
    equationSign: undefined
  }

  startDisplay = true;
  duration = 4;
  seconds = "";
  clockDisplay: string;
  equationVars = [];
  matches: String[];
  tempSum: number;

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  generateEquation():number {

    var answer;

    for (var i = 0; i < 2; i++) {
      this.equationVars.push(Math.floor(Math.random() * 9) + 1);
    }


    this.newEquation.equationSign = Math.floor(Math.random() * 2) + 1;

    switch (this.newEquation.equationSign) {
      case 1:
        answer = this.equationVars[0] + this.equationVars[1];
        break;

      case 2:
        answer = this.equationVars[0] - this.equationVars[1];
        break;
    }

    console.log("answer " + answer)
    return answer;
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
    this.getPermission();
    this.newEquation.answer = this.generateEquation();

  }

}
