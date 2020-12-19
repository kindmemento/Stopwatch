let miliseconds = 00
let seconds = 00
let minutes = 00
let hours = 00

let displayMiliseconds = 00
let displaySeconds = 00
let displayMinutes = 00
let displayHours = 00

const start = document.querySelector('.start')
let interval = null
let running = 'stopped'

const Stopwatch = () => {

    miliseconds++

    if (miliseconds / 100 === 1) {
      miliseconds = 0
      seconds++
    }

    if (miliseconds < 10) {
      displayMiliseconds = '0' + miliseconds
    } else {
      displayMiliseconds = miliseconds
    }

    if (seconds / 60 === 1) {
      seconds = 0
      minutes++
    }

    if (seconds < 10) {
      displaySeconds = '0' + seconds
    } else {
      displaySeconds = seconds
    }

    if (minutes / 60 === 1) {
      minutes = 0
      hours++
    }

    if (minutes < 10) {
      displayMinutes = '0' + minutes
    } else {
      displayMinutes = minutes
    }

    if (hours < 10) {
      displayHours = '0' + hours
    } else {
      displayHours = hours
    }

    const time = document.getElementById('time')
    time.innerText = displayHours + ':' + displayMinutes + ':' + displaySeconds + ':' + displayMiliseconds

  return {start}
}

function starter() {
  if (running === 'stopped') {
    interval = window.setInterval(Stopwatch, 10)
    start.innerText = 'Stop'
    running = 'started'
  } else if (running === 'started') {
    interval = window.clearInterval(interval)
    start.innerText = 'Start'
    running = 'stopped'
  }
}

function reset() {
  window.clearInterval(interval)
  miliseconds = 0
  seconds = 0
  minutes = 0
  hours = 0
  time.innerText = '00:00:00.00'
  start.innerText = 'Start'

  if (running === 'started') {
    running = 'stopped'
  }
}