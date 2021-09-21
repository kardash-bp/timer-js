export default class Timer {
  constructor() {
    this.circle = document.querySelector('circle')
    this.perimeter = this.circle.getAttribute('r') * Math.PI * 2
    this.currentOffset = 0
    this.timeInput = document.querySelector('.form-control') || 5.0
    this.startBtn = document.querySelector('#start')
    this.pauseBtn = document.querySelector('#pause')
    this.pauseBtn.disabled = true
    this.resetBtn = document.querySelector('#reset')
    this.resetBtn.disabled = true
    this.startBtn.addEventListener('click', this.start)
    this.pauseBtn.addEventListener('click', this.pause)
    this.resetBtn.addEventListener('click', this.reset)
    this.timeInput.addEventListener('input', this.onInput)
  }
  onInput = (e) => {
    this.startBtn.disabled = false
    this.pauseBtn.disabled = true
    this.resetBtn.disabled = true
    this.currentOffset = 0
    this.circle.setAttribute('stroke-dashoffset', this.currentOffset)
  }
  toggleBtn(arrBtn) {
    arrBtn.forEach((el) => {
      el.disabled = !el.disabled
      console.log(el.disabled)
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
    this.timeInput.value = '5.00'
    this.currentOffset = 0
    this.circle.setAttribute('stroke-dashoffset', this.currentOffset)

    console.log('reset timer')
  }
  countdown() {
    const chunk = this.perimeter / this.timeInput.value
    this.intId = setInterval(() => {
      if (this.timeInput.value > 0) {
        this.timeInput.value = (this.timeInput.value - 0.02).toFixed(2)
        this.currentOffset -= chunk / 50
        this.circle.setAttribute('stroke-dashoffset', this.currentOffset)
      }
      if (this.timeInput.value <= 0) {
        this.currentOffset = -this.perimeter
        clearInterval(this.intId)
      }
    }, 20)
  }
}
class Circle extends Timer {
  constructor(timeInput) {
    super(timeInput)
    this.perimeter =
      document.querySelector('circle').getAttribute('r') * Math.PI * 2
  }
}
