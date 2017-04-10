var ratio;
var setRatioo;
//first
var wave;
var vol;
var pitch;
var type = 'sine';
var pl;
var playing = true;
var freqF;
var inpF;
//second
var wave2;
var vol2;
var pitch2;
var type2 = 'sine';
var pl2;
var playing2 = true;
var freqS;
var inpS;

function setup() {
  noCanvas();

  setRatioo = select("#setRatio")
  setRatioo.changed(setRatio)
  //first
  wave = new p5.Oscillator();
  wave.setType(type);
  wave.start();
  pitch = createSlider(220,880,440,0.05);
  pitch.parent("#freqFirst")
  vol = createSlider(0,1,0,0.01);
  vol.parent("#volFirst")
  button = createButton("sine");
  button.parent("#changeFirst")
  button.mousePressed(changeType);
  pl = createButton("PAUSE");
  pl.mousePressed(playWave);
  pl.parent("#playFirst")
  inpF = select("#inputFirst");
  inpF.changed(setFreqF)
  //second
  wave2 = new p5.Oscillator();
  wave2.setType(type);
  wave2.start();
  pitch2 = createSlider(220,880,440,0.05);
  pitch2.parent("#freqSecond")
  vol2 = createSlider(0,1,0,0.01);
  vol2.parent("#volSecond")
  button2 = createButton("sine");
  button2.parent("#changeSecond")
  button2.mousePressed(changeType2);
  pl2 = createButton("PAUSE");
  pl2.mousePressed(playWave2);
  pl2.parent("#playSecond")
  inpS = select("#inputSecond");
  inpS.changed(setFreqS)
}

function setRatio() {
  pitch2.value(pitch.value()*setRatioo.value())
}

function setFreqF() {
  pitch.value(inpF.value())
}
function setFreqS() {
  pitch2.value(inpS.value())
}

function draw() {
  //first
  wave.freq(pitch.value())
  wave.amp(vol.value())
  freqF = pitch.value();
  select("#frequencyF").html(freqF)
  //second
  wave2.freq(pitch2.value())
  wave2.amp(vol2.value())
  freqS = pitch2.value();
  select("#frequencyS").html(freqS)

  //
  ratio = pitch2.value()/pitch.value();
  select("#ratio").html(ratio)
}

function changeType() {
  if(type == "sine")           type="triangle";
  else if(type =="triangle")  type="square" ;
  else if(type =="square")  type="sawtooth" ;
  else if(type =="sawtooth")  type="sine" ;


  button.html(type);
  wave.setType(type);
}

function changeType2() {
  if(type == "sine")           type="triangle";
  else if(type =="triangle")  type="square" ;
  else if(type =="square")  type="sawtooth" ;
  else if(type =="sawtooth")  type="sine" ;


  button2.html(type);
  wave2.setType(type);
}

function playWave() {
  if(playing) {
    wave.stop();
    pl.html("PLAY")
  } else {
    wave.start();
    pl.html("PAUSE")
  }
  playing =!playing
}
function playWave2() {
  if(playing2) {
    wave2.stop();
    pl2.html("PLAY")
  } else {
    wave2.start();
    pl2.html("PAUSE")
  }
  playing2 =!playing2
}
