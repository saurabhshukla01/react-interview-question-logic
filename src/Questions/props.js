import React, { useState } from "react";

// pass one component to another component based on <App initialCount={1}/>  using props in index.js page to App.js page
function TestComponent(props) {
  const [count, setCount] = useState(props.initialCount);
  const handleClick = () => {
    setCount(count + 1);
  };
 return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
 
export default TestComponent;