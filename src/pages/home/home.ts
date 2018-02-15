import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  buttons: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){

    this.buttons = [
      {
        id: "start",
        text: "Start"
      },
      {
        id: "exit",
        text: "Exit"
      }
    ]
   
    
  }
}
