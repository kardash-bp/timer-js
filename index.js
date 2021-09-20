class Timer {
  constructor(timeInt, startBtn, pauseBtn, resetBtn) {
    this.timeInput = timeInt
    this.startBtn = startBtn
    this.pauseBtn = pauseBtn
    this.pauseBtn.disabled = true
    this.resetBtn = resetBtn
    this.resetBtn.disabled = true
    this.startBtn.addEventListener('click', this.start)
    this.pauseBtn.addEventListener('click', this.pause)
    this.resetBtn.addEventListener('click', this.reset)
  }
  start = () => {
    this.startBtn.disabled = true
    this.pauseBtn.disabled = false
    this.resetBtn.disabled = false
    this.countdown()
  }
  pause = () => {
    this.startBtn.disabled = false
    this.pauseBtn.disabled = true

    clearInterval(this.intId)
  }
  reset = () => {
    this.startBtn.disabled = false
    this.pauseBtn.disabled = true
    this.resetBtn.disabled = true
    clearInterval(this.intId)
    this.timeInput.value = 30
    console.log('reset timer')
  }
  countdown() {
    this.intId = setInterval(() => {
      if (this.timeInput.value > 0) {
        this.timeInput.value--
      }
      console.log('in int', this.timeInput.value)
      this.timeInput.value === 0 && clearInterval(this.intId)
    }, 1000)
  }
}

//======== timer inst. ======================
const ti = document.querySelector('.form-control')
const sb = document.querySelector('#start')
const pb = document.querySelector('#pause')
const rb = document.querySelector('#reset')
const timer = new Timer(ti, sb, pb, rb)
