import React from "react";

const timer = () => {
    return (
        <div>
            <div className="timerDisplay">
                <h1>
                    <span className="hours">00</span>
                    <span className="minutes">:00</span>
                    <span className="seconds">:00</span>
                </h1>
            </div>
            <button id="startBtn">Start</button>
            <button id="stopBtn">Stop</button>
        </div>
    )
}

export default timer
