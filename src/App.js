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
    const st = event.target.value;
    if (st === "" || parseInt(st) < 1) {
      setStep(1);
    } else setStep(parseInt(st));
  }

  return (
    <div className="mainbox">
      <label className="display">{count}</label>
      <div className="step">
        <label>Custom step</label>
        <input type="number" value={step} onChange={handleStep} />
        <label className="disp">increase/decrease by {step}</label>
      </div>
      <div className="button-row">
        <button className="btn" onClick={handleAddClicked}>
          +
        </button>
        <button className="btn" onClick={handleSubClicked}>
          -
        </button>
      </div>
      <div>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
