import './App.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Gym",
      description: "Go to Gym"
    },
    {
      id: 2,
      title: "DSA",
      description: "Complate dsa from TUF+"
    },
    {
      id: 3,
      title: "DEV",
      description: "Complete 100XDev tuts"
    }
  ])

  function addTodo() {
    setTodos([...todos, {
      id: todos.length + 1,
      title: Math.ceil(Math.random() * 10),
      description: Math.random()
    }])
  }

  return (
    <>
    <button onClick={addTodo}>Add New todo</button>
    {todos.map((todo) => {
      return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
    })}
    </>
  )
}

function Todo ({title, description}) {
  return <div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
}


export default App
