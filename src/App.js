import { useState } from "react";
import "./styles.css";

const App = () => {
  const [inputValue, setInputValue] = useState(1);
  const [counterValue, setCounterValue] = useState(0);

  //just testing my local setup

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>Counter</h1>
      <h1>{counterValue}</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "18px" }}>
        <button
          onClick={() => setCounterValue(counterValue + parseInt(inputValue))}
        >
          +
        </button>
        <div className="inputWrapper">
          <span>Increment/Decrement by:</span>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            min="1"
            value={inputValue}
          />
        </div>
        <button onClick={() => setCounterValue(counterValue - inputValue)}>
          -
        </button>
      </div>
      <div></div>
      <button
        onClick={() => {
          setCounterValue(0);
          setInputValue(1);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default App;
