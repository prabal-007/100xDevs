import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

function App() {
  const [btn, setbtn] = useState(2)

  return <div>
    <button onClick={() => setbtn(1)}>1</button>
    <button onClick={() => setbtn(2)}>2</button>
    <button onClick={() => setbtn(3)}>3</button>
    <button onClick={() => setbtn(4)}>4</button>
    <Todo id={btn} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/api/todos/${id}`)
      .then(function(res) {
        setTodo (res.data);
      })
      .catch((error) => {
        console.error("Error fetching todo:", error);
      });
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;