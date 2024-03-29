// declaration
const seconds = document.getElementsByClassName('second')[0]
const clock = document.querySelector('.clock')
const hourBar = document.getElementById('hour')
const minuteBar = document.getElementById('minute')
const secondBar = document.getElementById('second')
const smoothBtn = document.getElementById('smooth')
let smooth = true

// display clock
for(let i = 0; i <= 60;i++){
    const newSecond = seconds.cloneNode(true)
    if(i % 5 == 0 && i != 0) {
        newSecond.firstElementChild.style.height = '20px'
        newSecond.lastElementChild.innerHTML = `${i/5}`
        newSecond.lastElementChild.style.transform = `rotate(${360-i*6}deg)`
    }
    newSecond.style.transform = `rotate(${i*6}deg)`
    clock.appendChild(newSecond)
}

// convert now time into degrees and apply it to the clock and do it asynchronously
function timeToDegrees(time) {
    const second = time.getSeconds() * 6 + (smooth? time.getMilliseconds() * 0.006 : 0), minute = time.getMinutes() * 6 + time.getSeconds() * 0.1, hour = time.getHours() * 30 + (time.getMinutes() * 60 + time.getSeconds()) * 1/120;
    hourBar.style.transform = `rotate(${hour}deg)`
    minuteBar.style.transform = `rotate(${minute}deg)`
    secondBar.style.transform = `rotate(${smooth? second : Math.ceil(second)}deg)`
}

setInterval(() => {
    const d = new Date()
    timeToDegrees(d)
    document.getElementById('digital-clock').innerText = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`
}, 1)


clock.addEventListener('click', () => {
    smooth = !smooth
})
