//global constants
var clueHoldTime = 1000; //length of holding clue's light/sound
var increment = 25; //length by which clueHoldTime decreases
const cluePauseTime = 333; //length of pausing btw clues
const nextClueWaitTime = 1000; // how long to wait before playback


//Global Variables
var pattern = [3, 6, 4, 2, 1, 5, 2, 3];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466,
  5: 520,
  6: 580,
  
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= increment;
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost :(.")
}

function winGame(){
  stopGame();
  alert("Game Over. You won!!")
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter]==btn){ //calls b1, b2, b3, or b4
    if(guessCounter==progress){ // if the length of the guess counter equals the indexed variable progress
      if(progress==pattern.length-1){ //progress starts from 0 and pattern starts from index 0
        return winGame();
      }
      else{
        progress++; //indexes progress
        playClueSequence();
      }
    }
    else{
      guessCounter++; //+ guessCounter --> continuing sequence 
      }
    }
    else{
      return loseGame();
    }
  }