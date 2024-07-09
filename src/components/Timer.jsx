import React, { useEffect, useRef } from 'react';
import './Timer.css';

const Timer = () => {
    const timerRef = useRef(null);
    const timeRef = useRef(0);
    const isRunningRef = useRef(false);
    const displayRef = useRef(null);

    useEffect(() => {
        return () => clearInterval(timerRef.current);
    }, []);

    const handleStart = () => {
        if (!isRunningRef.current) {
            isRunningRef.current = true;
            timerRef.current = setInterval(() => {
                timeRef.current += 1;
                updateDisplay();
            }, 1000);
        }
    };

    const handleStop = () => {
        if (isRunningRef.current) {
            isRunningRef.current = false;
            clearInterval(timerRef.current);
        }
    };

    const handleReset = () => {
        isRunningRef.current = false;
        clearInterval(timerRef.current);
        timeRef.current = 0;
        updateDisplay();
    };

    const updateDisplay = () => {
        if (displayRef.current) {
            const minutes = String(Math.floor(timeRef.current / 60)).padStart(2, '0');
            const seconds = String(timeRef.current % 60).padStart(2, '0');
            displayRef.current.textContent = `${minutes}:${seconds}`;
        }
    };

    return (
        <div className="timer-container">
            <h1>Stopwatch</h1>
            <div className="timer-display">
                <img src="https://img.icons8.com/fluent/48/000000/stopwatch.png" alt="Timer" />
                <h2 ref={displayRef}>00:00</h2>
            </div>
            <div className="timer-buttons">
                <button onClick={handleStart} className="start-button">Start</button>
                <button onClick={handleStop} className="stop-button">Stop</button>
                <button onClick={handleReset} className="reset-button">Reset</button>
            </div>
            <div className="background-decor"></div>
        </div>
    );
};

export default Timer;
