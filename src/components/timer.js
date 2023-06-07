import React from "react";

let seconds = 0
let minutes = 0
let hours = 0

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
        </div>
    )
}

const startTimer = () => {
    // console.log(e.target)
    const secondsDisplay = document.getElementsByClassName('seconds')[0]
    // console.log(secondsDisplay)
    setInterval(function(){
        seconds++
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        secondsDisplay.innerText = seconds
    }, 1000)
}

const stopTimer = () => {
    console.log('stop button pressed')
    clearInterval()
}

export default timer
