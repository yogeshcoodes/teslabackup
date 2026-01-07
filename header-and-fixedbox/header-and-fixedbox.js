const questions = [
  "What does the Tesla app do?",
  "Where can I drive the Model 3?",
  "Compare Model 3 with Model Y",
  "What's Dog Mode?"
];
let current = 0;
const input = document.querySelector(".placeholder");
if (input) {
  input.style.transition = "opacity 0.6s ease-in-out";
  setInterval(() => {
    // Only animate if input is empty
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