// declaration
const seconds = document.getElementsByClassName('second')[0]
const clock = document.querySelector('.clock')
const hourBar = document.getElementById('hour')
const minuteBar = document.getElementById('minute')
const secondBar = document.getElementById('second')

// display clock
for(let i = 0; i <= 60;i++){
    const newSecond = seconds.cloneNode(true)
    if(i % 5 == 0 && i != 0) {
        newSecond.firstElementChild.style.height = '20px'
        newSecond.lastElementChild.innerHTML = `${i/5}`
        newSecond.lastElementChild.style.transform = `translateX(-50%) rotate(${360-i*6}deg)`
    }
    newSecond.style.transform = `translate(-50%,-50%) rotate(${i*6}deg)`
    clock.appendChild(newSecond)
}

// convert now time into degrees and apply it to the clock and do it asynchronously
function timeToDegrees(time) {
    const second = time.getSeconds() * 6, minute = time.getMinutes() * 6 + time.getSeconds() * 0.1, hour = time.getHours() * 30 + time.getMinutes() * 0.5;
    hourBar.style.transform = `translate(-50%, -50%) rotate(${hour}deg)`
    minuteBar.style.transform = `translate(-50%, -50%) rotate(${minute}deg)`
    secondBar.style.transform = `translate(-50%, -50%) rotate(${second}deg)`
}
setInterval(() => {
    timeToDegrees(new Date())
}, 1)

