import "./styles.css";
import { useState } from "react";

/*my button has their own state */
function MyButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>The count value is {count}</h3>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <h3>The count value is {count}</h3> */}
      <MyButton />
    </div>
  );
}
