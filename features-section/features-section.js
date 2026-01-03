const video = document.getElementById("mapVideo");
const btn = document.getElementById("videoBtn");
const iconPath = document.getElementById("videoIconPath");

// ensure autoplay
window.addEventListener("load", () => {
  video.play().catch(() => {});
});

btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    iconPath.setAttribute(
      "d",
      "M6 4h4v16H6zm8 0h4v16h-4z" // pause
    );
  } else {
    video.pause();
    iconPath.setAttribute(
      "d",
      "M8 5v14l11-7z" // play
    );
  }
});
