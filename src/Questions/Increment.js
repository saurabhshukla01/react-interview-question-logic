import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  function onClick(){
    setCount(count + 1);
  }
  return (
    <div>
      <p>count is {count}</p>
      <button onClick={onClick}>Increment</button>
    </div>
  );
};

export default App;