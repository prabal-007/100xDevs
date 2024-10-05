import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

function Box() {
  const [sum, setsum] = useState(0);
  const [value, setValue] = useState(0);

  const handelChnage = (e) => {
    let n = parseInt(e.target.value, 10)
    let su = (n * (n + 1)) / 2
    setsum(su);
    setValue(e.target.value); 
  }

  return (
    <div>
      <input type="number" value={value} onChange={handelChnage} />
      <p>sum is {sum}</p>
    </div>
  )
}

export default App
