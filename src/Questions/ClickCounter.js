import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}