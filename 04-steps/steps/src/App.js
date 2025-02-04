import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={function () {
          setIsOpen(isOpen ? false : true);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);
  // callback function
  // function increaseCount() {
  //   setCount((c) => c + 1);
  // }

  return (
    <>
      <input type="range" min="1" max="10" value={step} onChange={(e)=>{
        e.preventDefault();
        setStep(Number(e.target.value));
      }}/>
      <div>Current step is {step}</div>
      <br></br>
      <button onClick={() => setStep((s) => s - 1)}>Step -</button>
      <button onClick={() => setStep((s) => s + 1)}>Step +</button>
      <br></br>
      <br></br>
      <div>Current count is {count}.</div>
      <br></br>
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <input type="text" value={count} onChange={(e)=>{
        setCount(Number(e.target.value))
      }}/>
      <button onClick={() => setCount((c) => c + step)}>+</button>
      <br></br>
      <br></br>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is: `
          : `${Math.abs(count)} days ago was: `}
      </span>
      <span>{date.toDateString()}</span>
      <div>
        {(count != 0 || step != 1) ? <button onClick={()=>{
          setCount(0);
          setStep(1);
        }}>Reset</button> : null}
      </div>
    </>
  );
}
