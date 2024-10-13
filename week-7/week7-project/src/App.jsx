// import { useContext, useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <Countrenderer />
    <Buttons></Buttons>
    <IsEven />
  </div>
}

function Countrenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

function IsEven() {
  const isEven = useRecoilValue(evenSelector)

  return <div>
    {isEven ? "It is Even" : null}
  </div>
}
 
function Buttons() {
  const setCount= useSetRecoilState(countAtom)

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
