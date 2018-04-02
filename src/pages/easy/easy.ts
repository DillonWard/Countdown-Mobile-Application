import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Equation } from '../../models/equations';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@IonicPage()
@Component({
  selector: 'page-easy',
  templateUrl: 'easy.html',
})
export class EasyPage implements OnInit {


  constructor(public navCtrl: NavController, public navParams: NavParams, private speechRecognition: SpeechRecognition, private changeRef: ChangeDetectorRef) {
  }

  newEquation: Equation = {
    answer: undefined,
    score: undefined,
    equationSign: undefined
  }

  startDisplay = true;
  duration = 4;
  countdownTime = 60;
  countdownDisplay: string;
  seconds = "";
  clockDisplay: string;
  equationVars = [];
  matches: String[];
  correct = false;
  running: boolean;
  lives = 3;

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
    return answer;
  }


  startListening() {
    this.speechRecognition.startListening().subscribe(matches => {
      console.log("Listening.")
      this.matches = matches;
      this.changeRef.detectChanges();
      this.checkAnswer();
    });
    
  }

  countdown(){
    if (this.countdownTime > 0) {
      var myInterval = setInterval(() => {
        this.countdownTime = this.countdownTime - 1;
        if (this.duration % 60 < 10) {
          this.seconds = "" + this.countdownTime % 60;
        } else {
          this.seconds = (this.countdownTime % 60).toString();
        }
        this.countdownDisplay = this.seconds;

        if (this.countdownDisplay == "0") {
          this.correct = false;
          this.running = false;
          clearInterval(myInterval);
        }
      }, 1000);
    }
  }

  checkAnswer(){
    var duration = 1;

    if(this.matches.find(x => x === this.newEquation.answer.toString())){
      
      this.correct = true;
      this.newEquation.score += 1;

      if (duration > 0) {
        var myInterval = setInterval(() => {
          duration = duration - 1;
          if (duration % 60 < 10) {
            this.seconds = "" + duration % 60;
          } else {
            this.seconds = (duration % 60).toString();
          }
  
          if (duration == 0) {
            this.correct = false;
            this.equationVars = [];
            this.newEquation.answer = this.generateEquation();
            clearInterval(myInterval);
          }
        }, 1000);
      }
    }else{

      this.lives -= 1;

      if(this.lives == 0){
        this.correct = false;
        this.running = false;
      }
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

        if (this.clockDisplay == "-1") {
          this.correct = false;
          this.startDisplay = false;
          this.running = true;
          this.countdown();
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

  retry(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  ngOnInit() {
    this.newEquation.score = 0;
    this.tickTick();
    this.getPermission();
    this.newEquation.answer = this.generateEquation();
  }

}
