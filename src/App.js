import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FocusInput from "./FocusInput";

// Create a component which loop through the colors in an array every 1 second, starting from the first element in the array. If it reaches the end of the array, start from 0 again, until the component is unmounted by click unmount button.

function App() {
  const [color, setColor] = useState("red");
  const [isUnmounted, setIsUnmounted] = useState(false);

  const colors = ["red", "blue", "green", "yellow", "black", "white"];

  const changeColor = () => {
    let index = colors.indexOf(color);
    if (index === colors.length - 1) {
      setColor(colors[0]);
    } else {
      setColor(colors[index + 1]);
    }
  };

  const unmount = () => {
    setIsUnmounted(true);
  };

  return (
    <div>
      <header>
        <button onClick={changeColor}>Change Color</button>
        <button onClick={unmount}>Unmount</button>
        {!isUnmounted && <div style={{ color: color }}>{color}</div>}
      </header>

      <FocusInput />
    </div>
  );
}

export default App;
