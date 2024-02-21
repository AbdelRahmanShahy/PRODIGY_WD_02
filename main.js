let minutes = 0;
let seconds = 0;
let tens = 0;
let addMinutes = document.querySelector('#minutes');
let addTens = document.querySelector('#tens');
let addSeconds = document.querySelector('#seconds');
let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');
let Time;

function startTime() { 
  tens++; 
  if (tens <= 9) {
    addTens.textContent = '0' + tens;
  }
  if (tens > 9) {
    addTens.textContent = tens;
  }

  if (tens > 99) {
    seconds++;
    addSeconds.textContent = '0' + seconds;
    tens = 0;
    addTens.textContent = '0' + 0;
  }

  if (seconds > 9) {
    addSeconds.textContent = seconds;
  }

  if (seconds > 59) {
    minutes++;
    addMinutes.textContent = '0' + minutes;
    seconds = 0;
    addSeconds.textContent = '0' + 0;
  }
}

startBtn.onclick = function() {
  clearInterval(Time);
  Time = setInterval(startTime, 10);
};

stopBtn.onclick = function() {
  clearInterval(Time);
};

resetBtn.onclick = function() {
  clearInterval(Time);
  tens = 0;
  seconds = 0;
  minutes = 0;
  addTens.textContent = '00';
  addSeconds.textContent = '00';
  addMinutes.textContent = '00';
};
