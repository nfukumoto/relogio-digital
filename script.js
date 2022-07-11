const Hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');

const display = document.querySelectorAll('.display');

const body = document.querySelector('body');
 
const relogio = setInterval(function time(){
const dateToday = new Date();
        const hr = dateToday.getHours();
        const min = dateToday.getMinutes();
        const ss = dateToday.getSeconds();

    Hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = ss;
})