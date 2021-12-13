/// /// /// /// construct  2 divs in stopwatch_container /// /// /// ///
/// /// /// /// add class to div (logo, time) /// /// /// ///
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
console.log(logo_letters)

/// /// /// /// set time + funstions to buttons /// /// /// ///

console.log(container)