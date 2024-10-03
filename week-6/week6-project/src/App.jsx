import './App.css'

function App() {

  return (
    <>
      <Header title={'Prabal'}/>
      <Header title={'Stark'}/>
    </>
  )
}

function Header({title}) {
  return <div>
    <h1>{title}</h1>
  </div>
}

export default App
