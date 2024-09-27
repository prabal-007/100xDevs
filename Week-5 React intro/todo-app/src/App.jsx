import { useState } from 'react'
function App() {
  const [todos, setTodo] = useState([{
    title: 'Task 1',
    description: 'Description one here!',
  },
  {
    title: 'Task 2',
    description: 'Description two here!',
  },
  {
    title: 'Task 3',
    description: 'Description three here!',
  }
  ])

  return (
    <>
      <div>
        {todos.map(function (todo) {
          return (<Todo title={todo.title} description={todo.description} />)
        })}
      </div>
    </>
  )
}

function Todo(props) {
  return (<div>
    <h1>{props.title}</h1>
    <h4>{props.description}</h4>
  </div>)
}

export default App
