import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [num, setNum] = useState(0);

  const increaseNum = (e) => {
    setNum(num + 1);
    e.preventDefault();
  };
  const decrease = (e) => {
    if (num > 0) {
      setNum(num - 1);
    }
    e.preventDefault();
  };
  return (
    <form className="app">
      <input type="text" name="" id="" value={num} />
      <div className="btns">
        <button onClick={increaseNum}>Inscrease + </button>
        <button onClick={decrease}>Decrease + </button>
      </div>
    </form>
  );
}
