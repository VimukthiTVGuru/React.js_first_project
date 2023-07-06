import { useState } from "react";
function App() {


  const [count, setCount] = useState(0);
  const increment = ()=>{
    setCount(count+1);
  }
  const decrement = ()=>{
    setCount(count-1);
  }
  return (
    <div className="App">
     <span>My Counter</span>
     <p>The count is {count}</p>
     <button onClick={decrement}>-</button>
     <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
