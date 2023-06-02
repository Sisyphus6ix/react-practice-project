import React from "react";

const timer = () => {
    return (
        <div>
            <div className="timerDisplay">
                <h1>00:00:00</h1>
            </div>
            <button id="startBtn">Start</button>
            <button id="stopBtn">Stop</button>
        </div>
    )
}

export default timer
