// ================= HERO IMAGE CAROUSEL =================

// images list (DIRECT LINKS)
const images = [
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Cybertruck-Desktop-US-v2.jpg",
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promo-Meet-Model-Y-Desktop.jpg",
];

// elements
const img = document.querySelector(".img-container img");
const leftBtn = document.querySelector(".hero-btn .right");
const rightBtn = document.querySelector(".hero-btn .left");
const dots = document.querySelectorAll(".owlcarosal button");

let currentIndex = 0;
let autoTimer = null;
const interval = 4000;

// fade setup (JS se hi)
img.style.transition = "opacity 0.8s ease-in-out";

// ================= CORE (FADE LOGIC) =================
function showImage(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;

  // fade out
  img.style.opacity = "0";

  setTimeout(() => {
    img.src = images[index];
    currentIndex = index;

    // dots active
    dots.forEach((dot, i) => {
      dot.style.background =
        i === currentIndex ? "#fff" : "rgba(255,255,255,0.4)";
    });

    // fade in
    img.style.opacity = "1";
  }, 300);
}

// ================= AUTOPLAY =================
function startAutoPlay() {
  stopAutoPlay();
  autoTimer = setInterval(() => {
    showImage(currentIndex + 1);
  }, interval);
}

function stopAutoPlay() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
}

// ================= ARROWS =================
rightBtn.addEventListener("click", () => {
  showImage(currentIndex + 1);
  startAutoPlay();
});

leftBtn.addEventListener("click", () => {
  showImage(currentIndex - 1);
  startAutoPlay();
});

// ================= DOTS =================
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showImage(index);
    startAutoPlay();
  });
});

// ================= SWIPE (MOBILE ONLY) =================
let startX = 0;

img.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

img.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    diff > 0 ? showImage(currentIndex + 1) : showImage(currentIndex - 1);
  }

  startAutoPlay();
});

// ================= INIT =================
img.style.opacity = "1";
showImage(0);
startAutoPlay();
