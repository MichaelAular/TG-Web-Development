/// /// /// /// construct  2 divs (logo, time) in stopwatch_container /// /// /// ///
const logo = document.createElement('div')
logo.classList.add('logo')
container.appendChild(logo)

const time = document.createElement('div')
time.classList.add('time')
container.appendChild(time)

/// /// /// /// make 3 buttons (in start, pause, stop) in container /// /// /// ///
const button_container = document.createElement('div')
button_container.classList.add('button_container')
container.appendChild(button_container)

const start_btn  = document.createElement('button')
start_btn.classList.add('start', 'btn')
start_btn.innerText = '▶'
button_container.appendChild(start_btn)

const pause_btn  = document.createElement('button')
pause_btn.classList.add('pause', 'btn')
pause_btn.innerText = '┃┃'
button_container.appendChild(pause_btn)

const stop_btn  = document.createElement('button')
stop_btn.classList.add('stop', 'btn')
stop_btn.innerText = '⬜'
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

/// /// /// /// set time + funstions to buttons /// /// /// ///

// let shownTime = document.createElement('p');

// const minutes = document.createElement('p');
// minutes.classList.add('minutes')
// shownTime.appendChild(minutes)

// const seconds = document.createElement('p');
// seconds.classList.add('seconds')
// shownTime.appendChild(seconds)

// const centiSec = document.createElement('p');
// centiSec.classList.add('centiSec')
// shownTime.appendChild(centiSec)

// shownTime = minutes + ' : ' + seconds + ' : ' + centiSec
// time.appendChild(shownTime)
// console.log(time)



/// /// /// /// container log /// /// /// ///
console.log(container)