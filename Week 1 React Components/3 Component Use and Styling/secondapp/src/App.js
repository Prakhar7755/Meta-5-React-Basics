import "./App.css";
import Heading from "./Heading";
import Logo from "./Logo";

function App() {
  return (
    <div className="App">
      <Heading firstName="Bob" />
      <Heading firstName="Jack" />
      <h1>Hello, World! and see the logo below</h1>
      <Logo />
    </div>
  );
}

export default App;
