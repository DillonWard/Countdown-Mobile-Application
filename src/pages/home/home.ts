import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

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
        text: "Start"
      }
    ]
  }

  navigate(){
    this.navCtrl.push(MenuPage)
  }
}
