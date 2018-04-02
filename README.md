# Countdown Mobile Application
###### *Dillon Ward - G00326756 - Gesture Based UI Development*
---
# Introduction
The following repository contains an Ionic Application for the module Gesture Based UI Development. The module is taught to undergraduate students at GMIT in the Department of Computer Science and Applied Physics. The lecturer is Damien Costello.

## Prerequisites
* [git](https://git-scm.com/)
* [Ionic](https://ionicframework.com/)
* [Android SDK](https://developer.android.com/studio/index.html)
* [USB-Debugging Enabled](https://www.embarcadero.com/starthere/xe5/mobdevsetup/android/en/enabling_usb_debugging_on_an_android_device.html)

## Cloning this Repository
To clone this repository and run the solutions, do the following:
```
In the command line change to a directory:
cd <directory>

Clone the repository:
git clone https://github.com/DillonWard/Countdown-Mobile-Application.git

Change directory into the cloned folder:
cd <folder name>

Connect your mobile device via USB

Run the program (USB-Debugging Enabled):
ionic cordova run android --device

To run the program via localhost in web browser:
ionic serve
```

# Overview
Countdown is a Mobile Game Application designed for educational purposes to help teach kids both how to properly annunciate when interacting with Cordova, improving pronounciation, and simple plus or minus Maths.
## Research
A [recent study](https://www.commonsensemedia.org/research/the-common-sense-census-media-use-by-kids-age-zero-to-eight-2017) found that the amount of time that kids spend on mobile devices has tripled within the past five years. The study shows that children spent 15 minutes a day staring at a mobile screen in 2013 and now they spend 48 minutes a day. The report also stated that 42% of children 8 and younger now have their own tablet devices. In recent years there has been a decline in the attention span of kids within school, so I thought I could try and bridge the gap in 2 ways - teachning simple Maths and pronounciation.

## Implementation
### Landing Page
![alt text](https://github.com/DillonWard/Countdown-Mobile-Application/blob/master/src/assets/imgs/landing-page.png?raw=true)

The landing page, as well as many other pages, have a large button bar. Once the 'START' button is selected, the menu will drop in. The menu page is pushed on top of the current page and is animated so that it loads in from the top down. The animation is added by using Animate.css.

### Menu
![alt text](https://github.com/DillonWard/Countdown-Mobile-Application/blob/master/src/assets/imgs/menu.png?raw=true)

Once the menu is loaded, the user will be presented with 3 different options. The menu is essentially where the user will select their difficulty. The difficulty of the game difficulty is dependent entirely on the size of the sum. Equations range from 2 - 4 numbers.

### In-Game
![alt text](https://github.com/DillonWard/Countdown-Mobile-Application/blob/master/src/assets/imgs/easy-play.png?raw=true) 
![alt text](https://github.com/DillonWard/Countdown-Mobile-Application/blob/master/src/assets/imgs/hard-play.png?raw=true)


Once the game is loaded, the user will be presented with 2 - 4 numbers, and a large plus or minus sign to symbolize either add or subtract ALL numbers starting from left to right meaning an answer given can be less than 0.


### Architecture


### Gesture Consideration


### Learning Outcomes



# Technologies
## Ionic
### What is Ionic?
[Ionic](https://en.wikipedia.org/wiki/Ionic_(mobile_app_framework)) is an HTML5 mobile app development framework targeted at building hybrid mobile apps. Hybrid apps are essentially small websites running in a browser shell in an app that have access to the native platform layer. Hybrid apps have many benefits over pure native apps, specifically in terms of platform support, speed of development, and access to 3rd party code.

Think of Ionic as the front-end UI framework that handles all of the look and feel and UI interactions your app needs in order to be compelling. Kind of like “Bootstrap for Native,” but with support for a broad range of common native mobile components, slick animations, and beautiful design.

Unlike a responsive framework, Ionic comes with very native-styled mobile UI elements and layouts that you’d get with a native SDK on iOS or Android but didn’t really exist before on the web. Ionic also gives you some opinionated but powerful ways to build mobile applications that eclipse existing HTML5 development frameworks.


## Font Awesome
### What is Font Awesome
[Font Awesome](https://fontawesome.com/) is a font and icon toolkit based on CSS and LESS. It was made by Dave Gandy for use with Twitter Bootstrap, and later was incorporated into the BootstrapCDN. Font Awesome is designed to be used with inline elements.

## Animate.css
### What is Animate.css?
[Animate.css](https://github.com/daneden/animate.css) provides CSS animations for your project solution. CSS animations allows animation of most HTML elements without using JavaScript or Flash.


## References
* [Welcome to Ionic](https://ionicframework.com/docs/v1/guide/preface.html)
* [Font Awesome](https://fontawesome.com/)
* [Animate.css](https://github.com/daneden/animate.css)
* [Common Sense Media - Kids Are Spending More Time On Mobile Devices Than Ever Before](https://www.commonsensemedia.org/research/the-common-sense-census-media-use-by-kids-age-zero-to-eight-2017)