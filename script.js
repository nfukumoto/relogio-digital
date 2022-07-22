var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var relogio = setInterval(function time(){
    var dateToday = new Date();
    var hr = dateToday.getHours();
    hr = ("0" + hr).slice(-2);
    var min = dateToday.getMinutes();
    min = ("0" + min).slice(-2);
    var ss = dateToday.getSeconds();
    ss = ("0" + ss).slice(-2);
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = ss;
})