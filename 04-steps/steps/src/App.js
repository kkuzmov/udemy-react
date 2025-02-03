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
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  // callback function
  // function increaseCount() {
  //   setCount((c) => c + 1);
  // }

  return (
    <>
      <div>Current count is {count}.</div>
      <button onClick={() => setCount((c) => c - 1)}>+</button>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is: `
          : `${Math.abs(count)} days ago was: `}
      </p>
      <p>{date.toDateString()}</p>
    </>
  );
}
