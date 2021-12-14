/// /// /// /// construct  4 divs (logo, time, stopwatch, bannerlogo) in stopwatch_container /// /// /// ///
const logo = document.createElement('div')
logo.classList.add('logo')
container.appendChild(logo)

const time = document.createElement('div')
time.classList.add('time')
container.appendChild(time)

const stopWatch = document.createElement('div')
stopWatch.classList.add('stopWatch')
container.appendChild(stopWatch)

const bannerlogo = document.createElement('div')
bannerlogo.classList.add('banner')
container.appendChild(bannerlogo)

/// /// /// /// make 3 buttons (in start, pause, stop) in container /// /// /// ///
const button_container = document.createElement('div')
button_container.classList.add('button_container')
container.appendChild(button_container)

const start_btn  = document.createElement('button')
start_btn.classList.add('start', 'btn')
start_btn.innerText = '▶'
start_btn.onclick = () => {startTimer()}
button_container.appendChild(start_btn)

const pause_btn  = document.createElement('button')
pause_btn.classList.add('pause', 'btn')
pause_btn.innerText = '┃┃'
pause_btn.onclick = () => {pauseTimer()}
button_container.appendChild(pause_btn)

const stop_btn  = document.createElement('button')
stop_btn.classList.add('stop', 'btn')
stop_btn.innerText = '⬜'
stop_btn.onclick = () => {stopTimer()}
button_container.appendChild(stop_btn)

/// /// /// /// add logo in logo /// /// /// ///
const logo_letters = document.createElement('p')
logo_letters.innerText = 'SEIKO'
logo.appendChild(logo_letters)

/// /// /// /// Create time /// /// /// ///
function showTime() {
    let date = new Date();
    let displayTime = date.toLocaleTimeString();
    time.innerText = displayTime;
  }

  setInterval(showTime, 1000);

// /// /// /// /// set time + functions to buttons /// /// /// ///
const timer = document.createElement('div');
stopWatch.appendChild(timer)
timer.innerText = '00:00:00'

let min = 0;
let sec = 0;
let centi = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        stopWatch.style.opacity = '1'
        timerCycle();
    }
}
function pauseTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    centi = parseInt(centi);
    sec = parseInt(sec);
    min = parseInt(min);

    centi = centi + 1;

    if (centi == 100) {
      sec = sec + 1;
      centi = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      centi = 0;
    }

    if (centi < 10) {
      centi = '0' + centi;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    if (min	 < 10) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec + ':' + centi;

    setTimeout("timerCycle()", 10);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}

function stopTimer() {
  stopWatch.style.opacity = '0'
  stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}
