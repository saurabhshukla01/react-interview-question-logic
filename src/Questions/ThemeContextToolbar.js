import React, { useContext, createContext } from "react";
const ThemeContext = createContext("light");
function App() {
  return (
	<ThemeContext.Provider value="dark">
  	<Toolbar />
	</ThemeContext.Provider>
  );
}
 function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
export default App;