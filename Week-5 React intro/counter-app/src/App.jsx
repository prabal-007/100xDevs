import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleCount}>Counter {count}</button>
    </div>
  )
}

export default App
