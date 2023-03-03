import "./App.css";
import React, { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  function clickhandler(event) {
    setToggle((current) => !current);
    //console.log('toggled');
  }
  return (
    <div>
      <button onClick={clickhandler}>click me</button>
      {toggle && <h2>button toggled</h2>}
    </div>
  );
}

export default App;
