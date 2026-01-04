/* =====================================================
   ENERGY SECTION – OWL INSPIRED SLIDER
   script.js untouched | CSS untouched
===================================================== */
(() => {
  /* ===============================
     ROOT SAFETY (VERY IMPORTANT)
     =============================== */
  const root = document.querySelector(".energy-section-wrap");
  if (!root) return;

  const wrap = root; // wrapper itself scrolls
  const slides = root.querySelectorAll(".energy-options");
  const dots = document.querySelectorAll(".owlcarosal-3 button");
  const prevBtn = root.querySelector(".img-btn3 .left2");
  const nextBtn = root.querySelector(".img-btn3 .right2");

  if (!slides.length) return;

  let index = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  /* smooth scroll */
  wrap.style.scrollBehavior = "smooth";

  /* ===============================
     HELPERS
     =============================== */

  function slideWidth() {
    const gap = 24; // CSS gap (same as models)
    return slides[0].offsetWidth + gap;
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.style.backgroundColor = i === index ? "#000" : "rgb(143, 132, 132)";
    });
  }

  function updateButtons() {
    if (prevBtn) {
      prevBtn.style.visibility = index === 0 ? "hidden" : "visible";
    }

    if (nextBtn) {
      nextBtn.style.visibility =
        index === slides.length - 1 ? "hidden" : "visible";
    }
  }

  function goTo(i) {
    if (i < 0) i = 0;
    if (i > slides.length - 1) i = slides.length - 1;

    index = i;
    wrap.scrollLeft = slideWidth() * index;
    updateDots();
    updateButtons();
  }

  /* ===============================
     ARROWS
     =============================== */

  prevBtn?.addEventListener("click", () => {
    goTo(index - 1);
  });

  nextBtn?.addEventListener("click", () => {
    goTo(index + 1);
  });

  /* ===============================
     DOTS
     =============================== */

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goTo(i));
  });

  /* ===============================
     SWIPE (TOUCH + MOUSE)
     =============================== */

  function swipeStart(x) {
    startX = x;
    currentX = x;
    isDragging = true;
  }

  function swipeMove(x) {
    if (!isDragging) return;
    currentX = x;
  }

  function swipeEnd() {
    if (!isDragging) return;
    isDragging = false;

    const diff = currentX - startX;
    const threshold = 80;

    if (diff < -threshold) goTo(index + 1);
    else if (diff > threshold) goTo(index - 1);
  }

  /* touch */
  wrap.addEventListener("touchstart", (e) => swipeStart(e.touches[0].clientX));
  wrap.addEventListener("touchmove", (e) => swipeMove(e.touches[0].clientX));
  wrap.addEventListener("touchend", swipeEnd);

  /* mouse */
  wrap.addEventListener("mousedown", (e) => swipeStart(e.clientX));
  window.addEventListener("mousemove", (e) => swipeMove(e.clientX));
  window.addEventListener("mouseup", swipeEnd);

  /* ===============================
     INIT
     =============================== */
  updateDots();
  updateButtons();
})();
