let playBtn = document.querySelector(".description .buttons button#play");
let playBtn_icon = document.querySelector(".description .buttons button#play i")
let timeTxt = document.querySelector(".time span");
let timebarState = document.querySelector(".music-bar-time");
let circle = document.querySelector(".bar span");
let audiofile = document.querySelector("audio");
let playing = false;

function PlayMusic(){
    if(playing == false){
        playBtn_icon.className = "fas fa-pause";
        audiofile.play();
        playing = true;
    }
    else{
        playBtn_icon.className = "fas fa-play";
        audiofile.pause();
        playing = false;
    }
}


playBtn.addEventListener("click", PlayMusic);


