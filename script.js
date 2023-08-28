// Creating variables
let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let intervalId;

// Event handling
const stopwatchEl = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

// To start the stopwatch
function startStopwatch() {
    intervalId = setInterval(updateStopwatch, 10);
    startBtn.disabled = true; // Disable the start button when running
    pauseBtn.disabled = false;
}

// To update the stopwatch after every millisecond
function updateStopwatch() {
    ms += 1;
    if (ms === 100) {
        sec++;
        ms = 0;
    }
    if (sec === 60) {
        min++;
        sec = 0;
    }
    if (min === 60) {
        hr++;
        min = 0;
    }
    updateStopwatchDisplay();
}

// Update digital timer of the stopwatch
function updateStopwatchDisplay() {
    stopwatchEl.querySelector('#hr').textContent = padTime(hr);
    stopwatchEl.querySelector('#min').textContent = padTime(min);
    stopwatchEl.querySelector('#sec').textContent = padTime(sec);
    stopwatchEl.querySelector('#ms').textContent = padTime(ms, 2);
}

function padTime(time, padding = 2) {
    return time.toString().padStart(padding, '0');
}

// To pause the stopwatch
function pauseStopwatch() {
    clearInterval(intervalId);
    startBtn.disabled = false; // Re-enable the start button
    pauseBtn.disabled = true;
}

// To reset the stopwatch
function resetStopwatch() {
    clearInterval(intervalId);
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    updateStopwatchDisplay();
    startBtn.disabled = false; // Re-enable the start button
    pauseBtn.disabled = true;
}

// Initially, enable the start button and update display
updateStopwatchDisplay();
