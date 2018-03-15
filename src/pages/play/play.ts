import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  { Equation } from '../../models/equations';
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
    equationSigns: [undefined]
  }
 
  startDisplay = true;
  duration = 4;
  seconds = "";
  clockDisplay: string;
  equationVars = [];
  matches: String[];
  tempSum = 0;

  getPermission(){
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) =>{
        if(!hasPermission){
          this.speechRecognition.requestPermission();
        }
      });
  }

  generateEquation(){

    for(var i = 0; i < 6; i++){

      this.newEquation.equationVariables.push(Math.floor(Math.random() * 9) + 1);
      console.log(this.newEquation.equationVariables[i])
      this.equationVars[i] = this.newEquation.equationVariables[i]; 

    }

    for(var r = 0; r < 5; r++){
      this.newEquation.equationSigns.push(Math.floor(Math.random() * 4) + 1);

    }
    console.log("Signs generated")

    for(var k = 0; k < 6; k++){
      for(var j = 0; j < 5; j++){

        if(this.newEquation.equationVariables[k] = 0){
          switch(this.newEquation.equationSigns[j]){
            case 1:
            this.multiply(this.newEquation.equationVariables[i], this.newEquation.equationVariables[k + 1]);
            break;

            case 2:
            this.divide(this.newEquation.equationVariables[i], this.newEquation.equationVariables[k + 1]);
            break;

            case 3:
            this.add(this.newEquation.equationVariables[i], this.newEquation.equationVariables[k + 1]);
            break;

            case 4:
            this.subtract(this.newEquation.equationVariables[i], this.newEquation.equationVariables[k + 1]);
            break;
          }
        } 

        else{
          switch (this.newEquation.equationSigns[j]){
            case 1:
            this.multiply(this.tempSum, this.newEquation.equationVariables[k]);
            break;

            case 2:
            this.divide(this.tempSum, this.newEquation.equationVariables[k + 1]);
            break;

            case 3:
            this.add(this.tempSum, this.newEquation.equationVariables[k + 1]);
            break;

            case 4:
            this.subtract(this.tempSum, this.newEquation.equationVariables[k + 1]);
            break;
          }

        }
      }
    }

    this.newEquation.answer = this.tempSum;

  }

  multiply(paramOne, paramTwo){

    this.tempSum += paramOne * paramTwo;
  }

  divide(paramOne, paramTwo){

    this.tempSum += paramOne / paramTwo;
  }

  add(paramOne, paramTwo){

    this.tempSum += paramOne + paramTwo;
  }

  subtract(paramOne, paramTwo){

    this.tempSum += paramOne + paramTwo;
  }


  startListening(){
    this.speechRecognition.startListening().subscribe(matches =>{
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

        if(this.clockDisplay == "-1"){
          this.startDisplay = false;
          clearInterval(myInterval);
        }
      }, 1000);
      
    }
  }

  back() {
    this.navCtrl.pop()
    this.speechRecognition.stopListening().then(() =>{
      console.log("Stopped.")
    });
  }



  ngOnInit() {
    this.tickTick();
    this.generateEquation();
    this.getPermission();

    for(var i = 0; i < this.newEquation.equationVariables.length; i ++){
      console.log(this.newEquation.equationVariables[i]);
    }
    
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

}
