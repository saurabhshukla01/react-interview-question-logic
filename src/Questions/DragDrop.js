import React, { useState } from "react";
import "./App.css"; // for basic styles
import "./DragDrop.css"; // for basic styles

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggingIndex === index) return;
    const newItems = [...items];
    const draggedItem = newItems[draggingIndex];
    newItems.splice(draggingIndex, 1); // remove the dragged item
    newItems.splice(index, 0, draggedItem); // insert at new position
    setDraggingIndex(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div className="container">
      <h2>Drag and Drop List</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault();
              handleDragOver(index);
            }}
            onDragEnd={handleDragEnd}
            className={draggingIndex === index ? "dragging" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
