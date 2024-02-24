import { useState } from "react";
import "./App.css";
// import Btn from "./Btn";
// import ModeToggler from "./ModeToggler";
import GuessGame from "./Guessgame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GuessGame />


    // <ModeToggler /> // exercise 6 for 

    // <Btn />//exercise 1 Button for seeing event handeling

  );
}

export default App;
