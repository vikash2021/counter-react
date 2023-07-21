import "./styles.css";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState(1);
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{counterValue}</h1>
      <div>
        <span>Increment/Decrement by:</span>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="number"
          min="1"
          value={inputValue}
        />
      </div>
      <div>
        <button
          onClick={() => setCounterValue(counterValue + parseInt(inputValue))}
        >
          +
        </button>
        <button onClick={() => setCounterValue(counterValue - inputValue)}>
          -
        </button>
      </div>
      <button
        onClick={() => {
          setCounterValue(0);
          setInputValue(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default App;
