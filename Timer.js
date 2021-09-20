export class Timer {
  constructor() {
    this.timeInput = document.querySelector('.form-control')
    this.startBtn = document.querySelector('#start')
    this.pauseBtn = document.querySelector('#pause')
    this.pauseBtn.disabled = true
    this.resetBtn = document.querySelector('#reset')
    this.resetBtn.disabled = true
    this.startBtn.addEventListener('click', this.start)
    this.pauseBtn.addEventListener('click', this.pause)
    this.resetBtn.addEventListener('click', this.reset)
  }
  toggleBtn(arrBtn) {
    arrBtn.forEach((el) => {
      el.disabled = !el.disabled
    })
  }
  start = () => {
    this.toggleBtn([this.startBtn, this.pauseBtn, this.resetBtn])
    this.countdown()
  }
  pause = () => {
    this.toggleBtn([this.startBtn, this.pauseBtn, this.resetBtn])
    clearInterval(this.intId)
  }
  reset = () => {
    this.toggleBtn([this.startBtn, this.pauseBtn, this.resetBtn])
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
      if (this.timeInput.value <= 0) {
        clearInterval(this.intId)
      }
    }, 1000)
  }
}
