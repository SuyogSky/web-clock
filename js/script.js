// Time Zone Options
const time_zone = {
    Nepal: 'Asia/Kathmandu',
    USA: 'America/New_York',
    India: 'Asia/Kolkata',
    Japan: 'Asia/Tokyo',
    United_Kingdom: 'Europe/London',
    Australia_Sydney: 'Australia/Sydney',
    Brazil: 'America/Sao_Paulo',
    Canada: 'America/Toronto',
    China: 'Asia/Shanghai',
    Germany: 'Europe/Berlin',
    South_Africa: 'Africa/Johannesburg',
    UAE: 'Asia/Dubai',
    New_Zealand: 'Pacific/Auckland',
    Russia: 'Europe/Moscow',
    France: 'Europe/Paris',
    Mexico: 'America/Mexico_City',
    Italy: 'Europe/Rome',
    Spain: 'Europe/Madrid',
    Turkey: 'Europe/Istanbul',
    Argentina: 'America/Argentina/Buenos_Aires',
};


const selectZone = document.querySelector('.form-select')
const timeDisplayer = document.querySelector('#time')

// Default Time Display on Page Open
const defOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
let defDateTime = new Date()
let defDate = defDateTime.toLocaleDateString(undefined, defOptions)
let defTime = defDateTime.getHours() + ':' + defDateTime.getMinutes() + ':' + defDateTime.getSeconds()
timeDisplayer.innerHTML = defTime + `<br>On ` + defDate

// declare date time
let time;
let date;

let formatter;
let currentTime;
let formattedDateTime;

// on changing time zone in html
selectZone.oninput = () => setInterval(() => {
    setTime()
}, 1000);

function setTime() {
    const options = {
        timeZone: selectZone.value,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour12: false,
    };

    formatter = new Intl.DateTimeFormat('en-US', options);
    currentTime = new Date();
    formattedDateTime = formatter.format(currentTime);

    [date, time] = formattedDateTime.split('at')

    timeDisplayer.innerHTML = time + `<br/>On ` + date
}


const zoneOptions = document.querySelector('.zone-options')
Object.keys(time_zone).forEach((country) => {
    zoneOptions.innerHTML += `<option value=${time_zone[country]}>${country}</option>`
})