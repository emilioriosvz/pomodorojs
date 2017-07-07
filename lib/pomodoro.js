const WORK_TIME = 150000
const SHORT_BREAK = 30000
const LONG_BREAK = 90000

const minToMilis = min => {
  if (min) return min * 60 * 100
}

function Pomodoro (opts = {}) {
  this.workTime = minToMilis(opts.workTime)|| WORK_TIME
  this.shortBreak = minToMilis(opts.shortBreak)|| SHORT_BREAK
  this.longBreak = minToMilis(opts.longBreak)|| LONG_BREAK

  this.numberOfPomodoros = 0
  this.numberOfShortBreaks = 0
  this.numberOfLongBreaks = 0
}

Pomodoro.prototype.start = function () {
  // TODO
}

Pomodoro.prototype.pause = function () {
  // TODO
}

Pomodoro.prototype.skipCurrentInterval = function () {
  // TODO
}

Pomodoro.prototype.getElapsedTime = function () { // milis
  // TODO
}

Pomodoro.prototype.getLeftTime = function () { // milis
  // TODO
}

module.exports = Pomodoro
