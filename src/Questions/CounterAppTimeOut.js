import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      console.log('Count updated after 2 seconds');
    }, 2000);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Count: {count}</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '18px' }}>
        Increase after 2 seconds
      </button>
    </div>
  );
}

export default CounterApp;
