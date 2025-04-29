import React, { useMemo } from "react";
import './App.css';

function App() {
  const numbers = [1,2,3,4,5];

  const doubledNumbers = useMemo(() => numbers.map(n => n * 2), []); // eslint-disable-next-line
  // 👆 here numbers is used inside useMemo but not added in dependency array! 

  return (
    <div>
      {doubledNumbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
}

export default App;
