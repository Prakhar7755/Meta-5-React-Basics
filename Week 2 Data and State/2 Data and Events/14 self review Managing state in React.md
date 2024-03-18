1.
Question 1
True or false? When lifting state up, you need to move the useState from a child component to a parent component.

1 / 1 point

False.


True.

Correct
Correct. When lifting state up, you need to move the useState from a child component to a parent component.

2.
Question 2
If the state variable holds an array or a string value, once you pass that state via props from a parent to a child, you can then read the length property from the received prop in the child component.

1 / 1 point

False


True

Correct
Correct. If the state variable holds an array or a string value, once you pass that state via props from a parent to a child, you can then read the length property from the received prop in the child component.

3.
Question 3
What's wrong with this code?


import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  const [fruits] = useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
  ]);
return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
    </div>
  );
}

export default App;

1 / 1 point

If you don't add the setFruits state-updating function when descructuring values from useState, the app won't compile.


The useState call should be React.useState.


There's nothing wrong with the provided code.

Correct
Correct. In the context of the give code snippet, you need to access the useState hook using the React.useState syntax.