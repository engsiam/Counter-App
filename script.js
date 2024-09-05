const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const warningMessage = document.getElementById("warning");
const stepInput = document.getElementById("stepInput");
const resetBtn = document.getElementById("reset");
const soundButton = document.getElementById("sound");
const darkModeToggle = document.getElementById("darkModeToggle");

const minLimit = 0;
const maxLimit = 10;
let count = 0;

const playSound = () => {
  soundButton.play();
};

const updateCounter = (isReset = false) => {
  counter.textContent = count;
  warningMessage.style.display =
    !isReset && (count === maxLimit || count === minLimit) ? "block" : "none";
  // Disable buttons at limits
  increaseBtn.disabled = count >= maxLimit;
  decreaseBtn.disabled = count <= minLimit;
  resetBtn.disabled = count === 0;
};

const changeCounter = (value) => {
  count += value;
  updateCounter();
  playSound();
};

increaseBtn.addEventListener("click", () => {
  const step = parseInt(stepInput.value, 10) || 1;
  if (count + step <= maxLimit) changeCounter(step); // Get the step from user input
});

decreaseBtn.addEventListener("click", () => {
  const step = parseInt(stepInput.value, 10) || 1;
  if (count - step >= minLimit) changeCounter(-step); // Get the step from user input
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter(true); // Pass true to skip the warning message on reset
});

// Keyboard functionality
document.addEventListener("keydown", (event) => {
  const step = event.shiftKey ? 2 : 1; // Double step when shift is held
  if (event.key === "ArrowUp" && count + step <= maxLimit) {
    changeCounter(step);
  } else if (event.key === "ArrowDown" && count - step >= minLimit) {
    changeCounter(-step);
  } else if (event.key === "r") {
    count = 0;
    updateCounter(true); // Pass true for reset
  }
});

//darkModeToggle function
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  increaseBtn.classList.toggle("dark-mode-btn");
  decreaseBtn.classList.toggle("dark-mode-btn");
  resetBtn.classList.toggle("dark-mode-btn");
  soundButton.classList.toggle("dark-mode-btn");
});