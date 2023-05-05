// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const confetti = new JSConfetti();
  const horn = document.getElementById("horn-select");  // horn select
  const img = document.querySelector("img");            // horn img
  const audio = document.querySelector("audio");        // audio set
  horn.addEventListener("change", function() {
    if (horn.value == "air-horn"){
      img.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (horn.value == "car-horn"){
      img.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else{ //party horn
      img.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  const volume = document.getElementById("volume");     // volume select
  const icon = document.querySelector("div img");       // icon img
  volume.addEventListener("change", function() {
    audio.volume = volume.value / 100;
    if (volume.value == 0){
      icon.src = "assets/icons/volume-level-0.svg";
    }
    else if (volume.value <= 32){
      icon.src = "assets/icons/volume-level-1.svg";
    }
    else if (volume.value <= 66){
      icon.src = "assets/icons/volume-level-2.svg";
    }
    else{ 
      icon.src = "assets/icons/volume-level-3.svg";
    }
  });

  const button = document.querySelector("button");      // button click
  button.addEventListener("click", function() {
    audio.play();
    if (horn.value == "party-horn"){
      confetti.addConfetti();
    }
  });
}