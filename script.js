let play_pause = document.getElementById("play_pause");
let audioElement = new Audio("./Song/Song1.mp3");
let song_bar = document.getElementById("song_progress_bar");
let album_name = document.getElementById("album_name");
let playButtons = document.querySelectorAll(".play i");
let currentPlayingIndex = -1;
let songs = [
  "./Song/Song1.mp3",
  "./Song/Song2.mp3",
  "./Song/Song3.mp3",
  "./Song/Song4.mp3",
  "./Song/Song5.mp3",
  "./Song/Song6.mp3",
  "./Song/Song7.mp3",
  "./Song/Song8.mp3",
  "./Song/Song9.mp3",
  "./Song/Song10.mp3",
  "./Song/Song11.mp3",
  "./Song/Song12.mp3",
];

let songNames = [
  "Aagi Aagi",
  "Urike Urike",
  "Darshana",
  "Hoyna Hoyna",
  "Arerey Manasa",
  "Masakali",
  "Enna Sona",
  "Evarevaro",
  "Adiye",
  "Nee Yadalo Naku",
  "Love Dose",
  "Tum Hi Ho",
];
play_pause.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime == 0) {
    http:audioElement.play();
    play_pause.classList.remove("fa-play");
    play_pause.classList.add("fa-pause");
  } else {
    audioElement.pause();
    play_pause.classList.remove("fa-pause");
    play_pause.classList.add("fa-play");
  }
});

audioElement.addEventListener("timeupdate", () => {
  let progress = (audioElement.currentTime / audioElement.duration) * 100;
  console.log(progress);
  song_bar.value = progress;
});

song_bar.addEventListener("change", () => {
  audioElement.currentTime = (song_bar.value * audioElement.duration) / 100;
});
 console.log(playButtons)
playButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (currentPlayingIndex !== index) {
      if (currentPlayingIndex !== -1) {
        playButtons[currentPlayingIndex].classList.replace("fa-pause","fa-play");
      }
      audioElement.src = songs[index];
      audioElement.play();
      button.classList.replace("fa-play", "fa-pause");
      play_pause.classList.replace("fa-play", "fa-pause");
      currentPlayingIndex = index;
      album_name.innerText = songNames[index];
    } else {
      if (audioElement.paused) {
        audioElement.play();
        button.classList.replace("fa-play", "fa-pause");
        play_pause.classList.replace("fa-play", "fa-pause");
      } else {
        audioElement.pause();
        button.classList.replace("fa-pause", "fa-play");
        play_pause.classList.replace("fa-pause", "fa-play");
      }
    }
  });
});

// !HANDLING PREV / NEXT BUTTONS
let count = -1;
let forward = document.querySelector(".fa-forward");
let backward = document.querySelector(".fa-backward");

forward.addEventListener("click", () => {
  if (count<11) {
    count++;
     audioElement.src=songs[count]
     http:audioElement.play()
     album_name.innerText=songNames[count]
     play_pause.classList.replace("fa-play", "fa-pause");
  }
});