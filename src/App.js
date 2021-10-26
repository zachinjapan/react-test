import logo from "./logo.svg";
import "./App.css";
import Introduction from "./Components/Introduction";
import Button from "./Components/Button";

function App() {
  return (
    <div>
      <h1>Welcome to my test App</h1>
      <Introduction
        name="Zach"
        food="pizza"
        movie="The Matrix"
        color="blue"
        number="8"
      />
      <Introduction
        name="Tim"
        food="Pasta"
        movie="The Notebook"
        color="green"
        number="27"
      />
      <Button />
    </div>
  );
}

export default App;
