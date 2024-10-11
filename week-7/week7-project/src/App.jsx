import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'

const Landing = lazy(() => import("./components/Landing"))
const Dashboard = lazy(() => import("./components/Dashboard"))

function App() {

  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"Loading..."}> <Dashboard /> </Suspense>} />
          <Route path='/' element={<Suspense fallback={"Loading..."}> <Landing /> </Suspense>} />
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
