import { useState } from "react";
import "./index.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleAddClicked() {
    setCount(count + step);
  }

  function handleSubClicked() {
    setCount(count - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function handleStep(event) {
    const mul = parseInt(event.target.value);
    setStep(mul);
  }

  return (
    <div className="mainbox">
      <label className="display">{count}</label>
      <div className="button-row">
        <button className="btn" onClick={handleAddClicked}>
          +
        </button>
        <button className="btn" onClick={handleSubClicked}>
          -
        </button>
      </div>
      <div className="step">
        <label>Custom step</label>
        <br />
        <input type="number" value={step} onChange={handleStep} />
      </div>
      <div>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
