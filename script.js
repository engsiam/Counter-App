const counter = document.getElementById("counter"); 
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const warningMessage = document.getElementById("warning");
const stepInput = document.getElementById("stepInput");
const resetBtn = document.getElementById("reset");
const soundButton = document.getElementById("soundButton"); // Should point to your <audio> element
const darkModeToggle = document.getElementById("darkModeToggle");
const soundToggle = document.getElementById("soundToggle");

let isSoundEnabled = true; // Default sound state is enabled

// Function to toggle sound on/off
const toggleSound = () => {
  isSoundEnabled = !isSoundEnabled; // Toggle the state
  soundToggle.textContent = `Sound: ${isSoundEnabled ? "ON" : "OFF"}`;
  soundToggle.classList.toggle("sound-on", isSoundEnabled);
  soundToggle.classList.toggle("sound-off", !isSoundEnabled);
  localStorage.setItem("sound", isSoundEnabled ? "enabled" : "disabled"); // Save state to localStorage
};

// Event listener for the sound toggle button
soundToggle.addEventListener("click", toggleSound);

// Play sound if sound is enabled
const playSound = () => {
  if (isSoundEnabled) {
    soundButton.currentTime = 0;  // Reset sound to start
    soundButton.play();           // Play sound if enabled
  }
};

const minLimit = 0;
const maxLimit = 10;
let count = 0;

// Function to update the counter with animation
const updateCounter = (isReset = false) => {
  // Add animations based on increment or decrement
  if (count > parseInt(counter.textContent)) {
    counter.classList.add('animate-up');
  } else {
    counter.classList.add('animate-down');
  }

  setTimeout(() => {
    counter.textContent = count;  // Update the counter value after animation
    counter.classList.remove('animate-up', 'animate-down');  // Remove animation classes
  }, 300);  // Wait for the animation to complete
  
  warningMessage.style.display =
    !isReset && (count === maxLimit || count === minLimit) ? "block" : "none";
  // Disable buttons at limits
  increaseBtn.disabled = count >= maxLimit;
  decreaseBtn.disabled = count <= minLimit;
  resetBtn.disabled = count === 0;
};

// Increase and Decrease functionality
const changeCounter = (value) => {
  count += value;
  updateCounter();
  playSound(); // Only play sound if sound is enabled
};

// Increase button functionality
increaseBtn.addEventListener("click", () => {
  const step = parseInt(stepInput.value, 10) || 1; // Get the step from user input
  if (count + step <= maxLimit) changeCounter(step);
});

// Decrease button functionality
decreaseBtn.addEventListener("click", () => {
  const step = parseInt(stepInput.value, 10) || 1; // Get the step from user input
  if (count - step >= minLimit) changeCounter(-step);
});

// Reset button functionality
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter(true); // Reset counter and update
});

// Keyboard functionality
document.addEventListener("keydown", (event) => {
  const step = event.shiftKey ? 2 : 1; // Double step when Shift is held
  if (event.key === "ArrowUp" && count + step <= maxLimit) {
    changeCounter(step);
  } else if (event.key === "ArrowDown" && count - step >= minLimit) {
    changeCounter(-step);
  } else if (event.key === "r") {
    count = 0;
    updateCounter(true); // Reset counter
  } else if (event.key === "m") {
    toggleSound(); // Toggle sound on/off when 'm' is pressed
  }
  else if(event.key === "d"){
    toggleDarkMode();
  }
});

// Function to toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  increaseBtn.classList.toggle("dark-mode-btn");
  decreaseBtn.classList.toggle("dark-mode-btn");
  resetBtn.classList.toggle("dark-mode-btn");
  soundToggle.classList.toggle("dark-mode-btn");

  // Save the dark mode state in localStorage
  const isDarkModeEnabled = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkModeEnabled ? "enabled" : "disabled");
};

// Event listener for the dark mode toggle button
darkModeToggle.addEventListener("click", toggleDarkMode);

// Apply dark mode and sound settings on page load if previously enabled
window.onload = () => {
  if (localStorage.getItem("darkMode") === "enabled") {
    toggleDarkMode(); // Apply dark mode if it was enabled
  }

  const soundState = localStorage.getItem("sound");
  if (soundState === "disabled") {
    isSoundEnabled = false;  // Apply saved sound preference
    soundToggle.textContent = "Sound: OFF";  // Update button text
    soundToggle.classList.add("sound-off");
  }
};
