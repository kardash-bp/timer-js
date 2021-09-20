export default class Timer {
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
      this.animateCircle()
      console.log('in int', this.timeInput.value)
      if (this.timeInput.value <= 0) {
        clearInterval(this.intId)
      }
    }, 1000)
  }
  animateCircle() {
    let radialEl = document.querySelector('.cp-wrapper')
    let fullEls = radialEl.querySelectorAll('.cp-full, .cp-regular')
    let fixEl = radialEl.querySelector('.cp-fix')
    let percentage = radialEl.querySelector('.cp-percent-number')
    percentage.innerText = this.timeInput.value
    let degree = this.timeInput.value
    fullEls.forEach((fullEl) => {
      fullEl.style.transform = `rotate(${1.8 * degree}deg)`
    })
    fixEl.style.transform = `rotate(${1.8 * degree * 2}deg)`
    radialEl.setAttribute('data-progress', degree)
    percentage.innerText = `${degree}`
    console.log(degree)
  }
}
