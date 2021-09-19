class Timer {
  constructor(timeInt, startBtn, pauseBtn, resetBtn) {
    this.timeInt = timeInt
    this.startBtn = startBtn
    this.pauseBtn = pauseBtn
    this.pauseBtn.disabled = true
    this.resetBtn = resetBtn
    this.setTime = 30
    this.intId = 0
    this.timeInt.addEventListener('input', this.inputValue)
    this.startBtn.addEventListener('click', this.start)
    this.pauseBtn.addEventListener('click', this.pause)
    this.resetBtn.addEventListener('click', this.reset)
  }
  start = () => {
    this.startBtn.disabled = true
    this.pauseBtn.disabled = false
    console.log(this.setTime)
    this.countdown()
  }
  pause = () => {
    this.startBtn.disabled = false
    this.pauseBtn.disabled = true

    clearInterval(this.intId)
  }
  reset = () => {
    clearInterval(this.intId)
    this.setTime = 30
    document.querySelector('.form-control').value = this.setTime
    console.log('reset timer', this.setTime)
  }
  countdown() {
    this.intId = setInterval(() => {
      if (this.setTime > 0) {
        this.setTime--
      }
      document.querySelector('.form-control').value = this.setTime
      console.log('in int', this.setTime)
      this.setTime === 0 && clearInterval(this.intId)
    }, 1000)
  }
  inputValue = (e) => {
    e.preventDefault()
    this.setTime = parseInt(e.target.value)
  }
}
const ti = document.querySelector('.form-control')
const sb = document.querySelector('#start')
const pb = document.querySelector('#pause')
const rb = document.querySelector('#reset')
const timer = new Timer(ti, sb, pb, rb)
