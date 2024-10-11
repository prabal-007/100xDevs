import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {


  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar() {
  const nevigate = useNavigate();
  
  return <div style={{ background: "black", color: "white", display: "flex" }}>
    {/* Hi this is top bar! */}
    <button onClick={() => {
      nevigate("/dashboard")
    }} style={{ margin: "10px", padding: "5px" }}>Dashboard</button>
    <button onClick={() => {
      nevigate('/')
    }} style={{ margin: "10px", padding: "5px" }}>Landing</button>
  </div>
}

export default App
