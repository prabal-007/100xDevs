import './App.css'
import { useState } from 'react'

function App() {
  return (
    <>
      <HeaderWithBtn />
      <Header title={'Stark'} />
      <Header title={'Stark1'} />
    </>
  )
}

function HeaderWithBtn() {
  const [head1, sethead1] = useState('Prabal')

  const handle = () => {
    sethead1(Math.ceil(Math.random() * 10))
  }

  return <div>
    <button onClick={handle}>Change Header</button>
    <Header title={head1} />
  </div>
}

function Header({ title }) {
  return <div>
    <h4>{title}</h4>
  </div>
}

export default App
