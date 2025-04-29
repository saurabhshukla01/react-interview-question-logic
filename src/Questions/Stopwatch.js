// Create a stopwatch application through which users can start, pause and reset the timer. Use React state, event handlers and the setTimeout or setInterval functions to manage the timer’s state and actions.



import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);      // time in seconds
  const [isRunning, setIsRunning] = useState(false); // to check if timer running

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000); // increment every 1 second
    } else {
      clearInterval(interval);
    }

    // Cleanup on unmount or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // Format time in HH:MM:SS
  const formatTime = (seconds) => {
    const getSeconds = `0${seconds % 60}`.slice(-2);
    const minutes = Math.floor(seconds / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>⏱ Stopwatch</h1>
      <h2 style={{ fontSize: '48px', marginBottom: '40px' }}>{formatTime(time)}</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button onClick={handleStart} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Start
        </button>
        <button onClick={handlePause} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Pause
        </button>
        <button onClick={handleReset} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
