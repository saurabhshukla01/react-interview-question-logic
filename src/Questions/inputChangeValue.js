// Analyze the below code and advise what is wrong with using setState() inside the render() method:

import React , {useState} from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const onChange = ((e) => {
    setInputValue(e.target.value)
  })
  return (
      <div>
          <p>This is Input box value : <b>{inputValue}</b></p>
          <br/>
          <input text="name" value={inputValue} onChange={onChange} />
      </div>
  );
}
export default App;