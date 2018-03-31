import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { PlayPage } from '../pages/play/play';
import { ScoresPage } from '../pages/scores/scores';
import { HelpPage } from '../pages/help/help';
import { APIService } from '../data/api.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    PlayPage,
    ScoresPage,
    HelpPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    PlayPage,
    ScoresPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, APIService
  ]
})
export class AppModule {}
