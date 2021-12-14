/// /// /// /// const div elements (circle 3 pointers) /// /// /// ///
const pointer_hour = document.createElement('div')
pointer_hour.classList.add('point_H')
analogue_clock.appendChild(pointer_hour)

const pointer_minute = document.createElement('div')
pointer_minute.classList.add('point_M')
analogue_clock.appendChild(pointer_minute)

const pointer_second = document.createElement('div')
pointer_second.classList.add('point_S')
analogue_clock.appendChild(pointer_second)

/// /// /// /// style  clock /// /// /// ///
const outerCircle = document.createElement('div')
outerCircle.classList.add('outerCircle')
analogue_clock.appendChild(outerCircle)

const innerCircle = document.createElement('div')
innerCircle.classList.add('innerCircle')
analogue_clock.appendChild(innerCircle)

for (i=1; i < 13 ; i++) {
    let fiveMinuteMark = document.createElement('div')
    fiveMinuteMark.classList.add('mark'+i)
    analogue_clock.appendChild(fiveMinuteMark)
}
console.log(analogue_clock)

/// /// /// /// style  3 pointers (hour minutes seconds) /// /// /// ///
/// /// /// /// set time to clock /// /// /// ///

