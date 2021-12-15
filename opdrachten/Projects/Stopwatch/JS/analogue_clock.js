/// /// /// /// const div elements (circle 3 hands) /// /// /// ///
const hand_hour = document.createElement('div')
hand_hour.classList.add('hand_H', 'hand')
analogue_clock.appendChild(hand_hour)

const hand_minute = document.createElement('div')
hand_minute.classList.add('hand_M', 'hand')
analogue_clock.appendChild(hand_minute)

const hand_second = document.createElement('div')
hand_second.classList.add('hand_S', 'hand')
analogue_clock.appendChild(hand_second)

/// /// /// /// style  clock /// /// /// ///
const outerCircle = document.createElement('div')
outerCircle.classList.add('outerCircle')
analogue_clock.appendChild(outerCircle)

const innerCircle = document.createElement('div')
innerCircle.classList.add('innerCircle')
analogue_clock.appendChild(innerCircle)

for (i=1; i < 13 ; i++) {
    const rotationdisc = document.createElement('div')
    rotationdisc.classList.add('disc'+i, 'rotationdisc')
    analogue_clock.appendChild(rotationdisc)

    const fiveMinuteMark = document.createElement('div')
    fiveMinuteMark.classList.add('number'+i, 'number')
    fiveMinuteMark.innerHTML = i
    rotationdisc.appendChild(fiveMinuteMark)
}

/// /// /// /// set time to clock /// /// /// ///
setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(hand_second, secondsRatio)
    setRotation(hand_minute, minutesRatio)
    setRotation(hand_hour, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}