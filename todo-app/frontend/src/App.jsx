import { useState } from 'react'
import './App.css'
import { Createtodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <>
      <Createtodo />
      <Todos todos = {todos} />
    </>
  )
}

export default App
