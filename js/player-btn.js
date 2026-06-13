// player-btn.js

// 播放器
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("music");
  const btn = document.getElementById("play-btn");

  btn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      btn.textContent = "🔊";
    } else {
      music.pause();
      btn.textContent = "🔈";
    }
  });
});