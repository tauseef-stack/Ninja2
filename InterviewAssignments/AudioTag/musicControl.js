var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("palypause");
var stopBtn = document.getElementById("stop");
var isPlay = false;

function playPause() {
  console.log("clicked");
  if (!isPlay) {
    audio.play();
    isPlay = true;
    playPauseBtn.innerHTML = "Pause &#9208;";
    stopBtn.removeAttribute("disabled", "disabled");
    stopBtn.setAttribute("enabled", "enabled");
  } else {
    audio.pause();
    isPlay = false;
    playPauseBtn.innerHTML = "Play &#9658;";
  }
}

function stop() {
  playPause();
  audio.pause();
  stopBtn.removeAttribute("enabled", "enabled");
  stopBtn.setAttribute("disabled", "disabled");
  // audio.currentTime = 0;
}
