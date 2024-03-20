import { useState } from 'react'
import './App.css'
import Promo from "./Promo";
import Child from "./Child";
import InputComponent from "./hooks/InputComponent";
import RegisterForm from "./hooks/RegisterForm";
// import StatefulComponent from "./state/StatefulComponent";
// import TextInputWithFocusButton from './hooks/TextInputWithFocusButton';

function App() {
  const [count, setCount] = useState(0)
  const date = new Date();

  return (
    <>
      <Promo />

      <Child message={date.toLocaleDateString()} />

      {/* USING HOOKS */}
      <InputComponent />
      <RegisterForm />
      {/* <StatefulComponent />
      <TextInputWithFocusButton /> */}


    </>
  )
}

export default App
