// I created a musical instrument to play my all time favorite song, Shelter by Porter Robinson and Madeon
// The main melody and intro use five notes, C (do), A (la), G (sol), D (re), and E (mi)
// The corresponding keys on your keyboard are A, S, D, F, and G
// When playing all five keys on your keyboard as chord, the Shelter symbol appears!
// If you aren't familiar with the song, refer to the official audio here: https://www.youtube.com/watch?v=HQnC1UHBvWA
// How to play the melody from Shelter using your keyboard:
// Play: A S D A
// A S D F ... F A
// A S D A
// G G A F G A F G A F G A F A
// and repeat once
// Songsheet I used for reference: https://musescore.com/bomb_and_kou/shelter

var freqA = 261;
var freqS = 440;
var freqD = 392;
var freqF = 294;
var freqG = 329;

var oscA, oscS, oscD, oscF, oscG;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;
var playingG = false;

function setup() {
  createCanvas (500, 500);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
}

function draw() {
  if (playingA, playingS, playingD, playingF, playingG) {
    background(0, 255, 255);
  } else {
    background(255, 0, 255);
  }
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'S') {
    osc = oscS;
    playingS = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'G') {
    osc = oscG;
    playingG = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
  }
}

function draw() {
  background(255);
  fill(120);
  if (playingA) {
    fill(0, 153, 115);
    noStroke();
    ellipse(250, 250,450, 450);
  }
  if (playingS) {
    fill(0);
    noStroke();
    ellipse(250, 250, 375, 375);
    fill(0, 153, 115);
    triangle(250, 100, 325, 175, 175, 175);
    fill(0);
    triangle(250, 130, 325, 205, 175, 205);
    fill(0, 153, 115);
    triangle(250, 400, 325, 325, 175, 325);
    fill(0);
    triangle(250, 370, 325, 295, 175, 295);
  }
  if (playingD) {
    fill(0, 153, 115);
    noStroke();
    quad(250, 175, 175, 250, 250, 325, 325, 250);
    fill(0);
    quad(250, 200, 200, 250, 250, 300, 300, 250);
    fill(0, 153, 115);
    quad(250, 225, 225, 250, 250, 275, 275, 250);
  }
  if (playingF) {
    fill(0, 153, 115);
    noStroke();
    rect(90, 215, 75, 25);
    rect(90, 265, 75, 25);
  }
  if (playingG) {
    fill(0, 153, 115);
    noStroke();
    rect(335, 215, 75, 25);
    rect(335, 265, 75, 25);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'S') {
    osc = oscS;
    playingS = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  } else if (key == 'G') {
    osc = oscG;
    playingG = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
}
