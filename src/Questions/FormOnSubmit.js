// Analyze the below code and advise what is wrong with using setState() inside the render() method:

import React , {useState} from "react";

function App() {
  const [name, setName] = useState("");
  function onChange(e){
    setName(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    alert(name);
    console.log("Submitted Name : ", name);
  }
  return (
      <div>
          <form onSubmit={onSubmit}>
            <label><input text="name" onChange={onChange} /></label>
            <button type="submit">Submit</button>
          </form>
      </div>
  );
}
export default App;


