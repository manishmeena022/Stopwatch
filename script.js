
// creating variables 
let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let intervalId;

//Event handling
const stopwatchEl = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.start-btn').addEventListener('click',startstopwatch);
const pauseBtn = document.querySelector('.pause-btn').addEventListener('click',pausestopwatch);
const resetBtn = document.querySelector('.reset-btn').addEventListener('click',resetstopwatch);


// to star the stopwatch
function startstopwatch(){
    intervalId = setInterval(updateStopwatch ,10);
    startBtn.disable = true;
    pauseBtn.disable = false;
}



// to update the stopwatch after every millisecond
function updateStopwatch() {
    ms += 1;
    if(ms === 100){
        sec++;
        ms = 0;
    }
    if(sec === 60){
        min++;
        sec =0;
    }
    if(min === 60){
        hr++ ;
        min = 0;
    }
    updateStopwatchDisplay();
}

// update digital timer of the stopwatch 
function updateStopwatchDisplay() {
    stopwatchEl.querySelector('#hr').textContent = padTime(hr);
    stopwatchEl.querySelector('#min').textContent = padTime(min);
    stopwatchEl.querySelector('#sec').textContent = padTime(sec);
    stopwatchEl.querySelector('#ms').textContent = padTime(ms, 2);
}
function padTime(time,padding = 2){
    return time.toString().padStart(padding,'0');
}


// to pasue the stop watch
function pausestopwatch () {
    clearInterval(intervalId);
    startBtn.disable = false;
    pauseBtn.disable = true;
}

// to reset the stopwatch
function resetstopwatch() {
    clearInterval(intervalId);
    hr = 0;
    min = 0;
    sec =0;
    ms = 0;
    updateStopwatchDisplay();
    startBtn.disable = false;
    pauseBtn.disable = true;
}