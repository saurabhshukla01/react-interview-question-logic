// Analyze the below code and advise what is wrong with using setState() inside the render() method:

import React , {useState} from "react";

function App() {
  const [gender, setGender] = useState("");
  const handleChange = ((e) => {
    setGender(e.target.value)
  })
  return (
    <div style={{ padding: '20px' }}>
      <h2>Select Gender:</h2>
      <select value={gender} onChange={handleChange}>
        <option value="">-- Select Gender --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      {gender && (
        <div style={{ marginTop: '20px' }}>
          <h3>You selected: {gender.charAt(0).toUpperCase() + gender.slice(1)}</h3>
          
          {/* You can also show different data based on selection */}
          {gender === 'male' && <p>Showing data for Male</p>}
          {gender === 'female' && <p>Showing data for Female</p>}
          {gender === 'other' && <p>Showing data for Other</p>}
        </div>
      )}
    </div>
  );
}
export default App;