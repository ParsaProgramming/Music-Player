let playBtn = document.querySelector(".description .buttons button#play");
let playBtn_icon = document.querySelector(
  ".description .buttons button#play i"
);
let timeTxt = document.querySelector(".time span");
let timebarState = document.querySelector(".music-bar-time");
let circle = document.querySelector(".bar span");
let audiofile = document.querySelector("audio");
let image = document.querySelector(".image-place");
let playing = false;

function PlayMusic() {
  if (playing == false) {
    playBtn_icon.className = "fas fa-pause";
    audiofile.play();
    playing = true;
  } else {
    playBtn_icon.className = "fas fa-play";
    audiofile.pause();
    playing = false;
  }

}

function SetTime(){
    let seconds = Math.floor(audiofile.currentTime%60);
    let minutes = Math.floor(audiofile.currentTime / 60);

    if(seconds < 10){
        seconds = "0" + seconds
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }

    timeTxt.textContent = minutes + ":" + seconds;

}



audiofile.addEventListener("timeupdate", SetTime)
playBtn.addEventListener("click", PlayMusic);
