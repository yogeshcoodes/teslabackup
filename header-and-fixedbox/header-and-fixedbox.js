const questions = [
  "What does the Tesla app do?",
  "Where can I drive the Model 3?",
  "Compare Model 3 with Model Y",
  "What's Dog Mode?",
];
let current = 0;
const input = document.querySelector(".placeholder");
if (input) {
  input.style.transition = "opacity 0.6s ease-in-out";
  setInterval(() => {
    if (input.value === "") {
      input.style.opacity = "0";
      setTimeout(() => {
        current = (current + 1) % questions.length;
        input.placeholder = `"${questions[current]}"`;
        input.style.opacity = "1";
      }, 300);
    }
  }, 3000);
}

// MEGA MENU HOVER FIX
const menuPairs = [
  { trigger: ".has-mega", menu: ".mega-menu" },
  { trigger: ".has-mega2", menu: ".mega-menu2" },
  { trigger: ".has-mega3", menu: ".mega-menu3" },
  { trigger: ".has-mega4", menu: ".mega-menu4" },
  { trigger: ".has-mega5", menu: ".mega-menu5" },
];

menuPairs.forEach((pair) => {
  const trigger = document.querySelector(pair.trigger);
  const menu = document.querySelector(pair.menu);

  if (trigger && menu) {
    let hideTimeout;

    const showMenu = () => {
      clearTimeout(hideTimeout);
      menu.style.opacity = "1";
      menu.style.pointerEvents = "auto";
      menu.style.transform = "translateX(-50%) translateY(0)";
    };

    const hideMenu = () => {
      menu.style.opacity = "0";
      menu.style.pointerEvents = "none";
      menu.style.transform = "translateX(-50%) translateY(-20px)";
    };

    // Trigger hover
    trigger.addEventListener("mouseenter", showMenu);

    trigger.addEventListener("mouseleave", () => {
      hideTimeout = setTimeout(hideMenu, 150);
    });

    // Menu hover
    menu.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      showMenu();
    });

    menu.addEventListener("mouseleave", hideMenu);
  }
});

const toggleBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobilemenu");
const closeItem = document.querySelector(".menuitm.c");
/* OPEN / CLOSE from hamburger */ toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
/* CLOSE when .menuitm.c clicked */ closeItem.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
