/// /// /// /// const div elements (circle 3 hands) /// /// /// ///
const hand_hour = document.createElement('div')
hand_hour.classList.add('hand_H')
analogue_clock.appendChild(hand_hour)

const hand_minute = document.createElement('div')
hand_minute.classList.add('hand_M')
analogue_clock.appendChild(hand_minute)

const hand_second = document.createElement('div')
hand_second.classList.add('hand_S')
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
    rotationdisc.appendChild(fiveMinuteMark)
}
/// /// /// /// style  3 pointers (hour minutes seconds) /// /// /// ///
/// /// /// /// set time to clock /// /// /// ///

