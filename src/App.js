import React, { useState } from "react";
import Toggle from "./Toggle";
import "./styles.css";

export default function App() {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="App">
      <Toggle onChange={(event) => setToggled(event.target.checked)} />
      <p style={{ textAlign: "left" }}>
        Switch is currently {toggled ? "on" : "off"}
      </p>
    </div>
  );
}
