const playBtn = document.getElementById("play-btn");
const bgVideo = document.getElementById("bg-video");

playBtn.addEventListener("click", () => {
  if (bgVideo.paused) {
    bgVideo.play();
    playBtn.textContent = "Pause";
  } else {
    bgVideo.pause();
    playBtn.textContent = "Play";
  }
});
