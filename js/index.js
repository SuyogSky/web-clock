const timeDisplayer = document.querySelector('#time')

let currentTime;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

setInterval(() => {
    currentTime = new Date()
    date = currentTime.toLocaleDateString(undefined, options)
    time = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds()
    timeDisplayer.innerHTML = time + `<br>On ` + date

}, 1000);