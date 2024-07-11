let timerDisplay = document.querySelector('.timerDisplay');
let StopBtn = document.getElementById('StopBtn');
let StartBtn = document.getElementById('StartBtn');
let ResetBtn = document.getElementById('ResetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerID = null;

StartBtn.addEventListener('click', function(){
    if(timerID !== null){
        clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10);
});

StopBtn.addEventListener('click', function(){
    clearInterval(timerID);
});

ResetBtn.addEventListener('click', function(){
        clearInterval(timerID);
        timerDisplay.innerHTML =`00 : 00 : 00`;
});


function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}