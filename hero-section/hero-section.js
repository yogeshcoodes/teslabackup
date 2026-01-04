// ================= HERO SLIDER (HTML SLIDES) =================

const slides = document.querySelectorAll(".hero-slide");
const nextBtn = document.querySelector(".hero-btn .right");
const prevBtn = document.querySelector(".hero-btn .left");
const dots = document.querySelectorAll(".owlcarosal button");

let index = 0;
let timer = null;
const interval = 4000;

// ================= CORE =================
function showSlide(i) {
  if (i < 0) i = slides.length - 1;
  if (i >= slides.length) i = 0;

  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
  });

  dots.forEach((dot, idx) => {
    dot.style.background =
      idx === i ? "#fff" : "rgba(255,255,255,0.4)";
  });

  index = i;
}

// ================= AUTOPLAY =================
function startAuto() {
  stopAuto();
  timer = setInterval(() => showSlide(index + 1), interval);
}

function stopAuto() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

// ================= ARROWS =================
nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
  startAuto();
});

prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
  startAuto();
});

// ================= DOTS =================
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    startAuto();
  });
});

// ================= SWIPE (MOBILE) =================
let startX = 0;

slides.forEach(slide => {
  slide.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  slide.addEventListener("touchend", e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? showSlide(index + 1) : showSlide(index - 1);
    }
    startAuto();
  });
});

// ================= INIT =================
showSlide(0);
startAuto();
