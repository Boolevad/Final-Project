// Get references to the buttons and the image
var spinButton = document.getElementById('play_btn');
var resetButton = document.getElementById('stop_btn');
var rotatingImage = document.getElementById('rotatingImage');
var timerContainer = document.getElementById('activity1');
var isSpinning = false;

let timerInterval;
let startTime = null;
let elapsedSeconds = 0;
let timerRunning = false;

// Get the plus button
var plusButton = document.getElementById('plus_btn');
var activityInput = document.getElementById('activity');

// Boolean variable to track plusButton state
var isPlusButtonActive = false;

// Load saved state
document.addEventListener('DOMContentLoaded', () => {
  // Load activity input value
  const savedActivity = localStorage.getItem('activity');
  if (savedActivity) {
    activityInput.value = savedActivity;
  }

  // Load start time and elapsed time
  const savedStartTime = parseInt(localStorage.getItem('startTime'), 10);
  const savedElapsedSeconds = parseInt(localStorage.getItem('elapsedSeconds'), 10);
  const savedTimerRunning = localStorage.getItem('timerRunning') === 'true';

  if (!isNaN(savedElapsedSeconds)) {
    elapsedSeconds = savedElapsedSeconds;
  }

  if (savedTimerRunning) {
    if (!isNaN(savedStartTime)) {
      startTime = savedStartTime;
      const currentTime = Math.floor(Date.now() / 1000);
      elapsedSeconds += currentTime - startTime;
      startTimer();
    }
  }

  // Load spinning state
  const savedIsSpinning = localStorage.getItem('isSpinning') === 'true';
  if (savedIsSpinning) {
    rotatingImage.classList.add('spinning');
    isSpinning = true;
  }

  // Load plus button state
  const savedPlusButtonActive = localStorage.getItem('isPlusButtonActive') === 'true';
  if (savedPlusButtonActive) {
    handlePlusButtonClick();
  }

  updateTimerDisplay();
});

// Save activity input value
activityInput.addEventListener('input', () => {
  localStorage.setItem('activity', activityInput.value);
});

// Function to toggle spinning
function toggleSpin() {
  toggleTimer();
  if (isSpinning) {
    rotatingImage.classList.remove('spinning'); // Stop spinning
  } else {
    rotatingImage.classList.add('spinning'); // Start spinning
  }
  isSpinning = !isSpinning; // Toggle spinning state
  localStorage.setItem('isSpinning', isSpinning);
}

// Function to reset image and timer
function resetImage() {
  rotatingImage.style.transform = 'rotate(0deg)'; // Reset rotation
  rotatingImage.classList.remove('spinning'); // Stop spinning
  resetTimer(); // Stop the timer
  isSpinning = false; // Reset spinning state
  localStorage.setItem('isSpinning', isSpinning);
}

function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
    localStorage.setItem('timerRunning', timerRunning);
    const currentTime = Math.floor(Date.now() / 1000);
    elapsedSeconds += currentTime - startTime;
    localStorage.setItem('elapsedSeconds', elapsedSeconds);
  } else {
    startTime = Math.floor(Date.now() / 1000);
    localStorage.setItem('startTime', startTime);
    startTimer();
  }
}

function startTimer() {
  timerRunning = true;
  clearInterval(timerInterval);  // Ensure no existing interval is running
  timerInterval = setInterval(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    elapsedSeconds = currentTime - startTime + parseInt(localStorage.getItem('elapsedSeconds') || '0', 10);
    updateTimerDisplay();
  }, 1000);
  localStorage.setItem('timerRunning', timerRunning);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  elapsedSeconds = 0;
  updateTimerDisplay();
  localStorage.setItem('elapsedSeconds', elapsedSeconds);
  localStorage.setItem('timerRunning', timerRunning);
}

function updateTimerDisplay() {
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;
  const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  timerContainer.innerText = formattedTime;
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}

// Add event listeners to the buttons
spinButton.addEventListener('click', toggleSpin);
resetButton.addEventListener('click', resetImage);

// Function to add a new activity container
function handlePlusButtonClick() {
  if (!isPlusButtonActive) {
    // Perform add activity logic
    var activityInputValue = activityInput.value.trim(); // Get trimmed value of activityInput

    // Check if activityInput is not blank
    if (activityInputValue !== '') {
      var activityContainer = document.getElementById('activity_container');

      // Enable the buttons in the original container
      activityInput.disabled = true;
      spinButton.removeAttribute('disabled');
      resetButton.removeAttribute('disabled');
      plusButton.innerHTML = "../x.png"

      // Set plusButton state to active
      isPlusButtonActive = true;
    }
  } else {
    // Clear the activityInput and reset plusButton state
    activityInput.value = ''; // Clear the input field
    activityInput.disabled = false; // Re-enable the input field

    // Reset plusButton state to inactive
    isPlusButtonActive = false;
    resetTimer();
    resetImage();
  }
  localStorage.setItem('isPlusButtonActive', isPlusButtonActive);
}

// Add event listener to the plus button
plusButton.addEventListener('click', handlePlusButtonClick);
