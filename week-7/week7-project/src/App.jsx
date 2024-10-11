import { useContext, useState } from "react"
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count, setCount}} >
      <Count count={count}></Count>
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <Countrenderer />
    <Buttons></Buttons>
  </div>
}

function Countrenderer() {
  const { count } = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons() {
  const { count, setCount } = useContext(CountContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
