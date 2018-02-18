// I created a musical instrument to play my all time favorite song, Shelter by Porter Robinson and Madeon
// The main melody and intro use five notes, C, A, G, D, and E.
// When playing all keys A, S, D, F, and G on your keyboard as chord, the Shelter symbol appears!
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
  createCanvas (100, 100);
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
    ellipse(50, 50, 90, 90);
  }
  if (playingS) {
    fill(0);
    noStroke();
    ellipse(50, 50, 75, 75);
    fill(0, 153, 115);
    triangle(50, 20, 65, 35, 35, 35);
    fill(0);
    triangle(50, 26, 65, 41, 35, 41);
    fill(0, 153, 115);
    triangle(50, 80, 65, 65, 35, 65);
    fill(0);
    triangle(50, 74, 65, 59, 35, 59);
  }
  if (playingD) {
    fill(0, 153, 115);
    noStroke();
    quad(50, 35, 35, 50, 50, 65, 65, 50);
    fill(0);
    quad(50, 40, 40, 50, 50, 60, 60, 50);
    fill(0, 153, 115);
    quad(50, 45, 45, 50, 50, 55, 55, 50);
  }
  if (playingF) {
    fill(0, 153, 115);
    noStroke();
    rect(18, 43, 15, 5);
    rect(18, 53, 15, 5);
  }
  if (playingG) {
    fill(0, 153, 115);
    noStroke();
    rect(67, 43, 15, 5);
    rect(67, 53, 15, 5);
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
