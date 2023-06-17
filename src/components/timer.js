import React from "react";

let seconds = 0
let minutes = 0
let hours = 0
let timerLogic

const timer = () => {
    return (
        <div>
            <div className="timerDisplay">
                <h1>
                    <span className="hours">00</span>:
                    <span className="minutes">00</span>:
                    <span className="seconds">00</span>
                </h1>
            </div>
            <button onClick={startTimer} id="startBtn">Start</button>
            <button onClick={stopTimer} id="stopBtn">Stop</button>
            <button onClick={resetTimer} id="resetBtn">Reset</button>
        </div>
    )
}

const startTimer = () => {
    timerLogic = setInterval(
        function(){
        secondsLogic()
        minutesLogic()
        hoursLogic()
    }, 1000)
}

const stopTimer = () => {
    clearInterval(timerLogic)
}

const resetTimer = () => {
    let secondsDisplay = document.getElementsByClassName('seconds')[0]
    let minutesDisplay = document.getElementsByClassName('minutes')[0]
    let hoursDisplay = document.getElementsByClassName('hours')[0]

    seconds = 0
    minutes = 0
    hours = 0

    secondsDisplay.innerText = `0${seconds}`
    minutesDisplay.innerText = `0${minutes}`
    hoursDisplay.innerText = `0${hours}`
}

const secondsLogic = () => {
   let secondsDisplay = document.getElementsByClassName('seconds')[0]
    seconds++
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    secondsDisplay.innerText = seconds
}

const minutesLogic = () => {
    let secondsDisplay = document.getElementsByClassName('seconds')[0]
    let minutesDisplay = document.getElementsByClassName('minutes')[0]

    if (seconds > 59) {
        minutes++
        seconds = '00'
    }
    
    minutesDisplay.innerText = minutes
    secondsDisplay.innerText = seconds
}

const hoursLogic = () => {
    let minutesDisplay = document.getElementsByClassName('minutes')[0]
    let hoursDisplay = document.getElementsByClassName('hours')[0]

    if (minutes > 59){
        hours++
        minutes = '0'
    }

    if (minutes < 10) {
        minutesDisplay.innerText = '0' + minutes
    }

    hoursDisplay.innerText = hours
}

export default timer
