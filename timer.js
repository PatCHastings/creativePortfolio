class Timer {

    constructor({seconds, minutes, timerSeconds, timerMinutes, interval, counter}) {
        this.seconds = seconds;
        this.minutes = minutes;
        this.timerSeconds = timerSeconds;
        this.timerMinutes = timerMinutes;
        this.interval = interval;
        this.counter = counter;
    }
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

  export default Timer;