import React, { useState } from "react";

function App() {
  const [list, setList] = useState(["Item1", "Item2"]);

  const addItem = () => {
    const newItem = "Item3";
    setList([...list, newItem]); // ✅ Create a new array and update state
  };

  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
