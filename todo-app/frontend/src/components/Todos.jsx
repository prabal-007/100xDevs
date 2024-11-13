import { useState } from "react";

export function Todos({ todos }) {
    const [completed, setComplete] = useState(false);
    
    const handleComplete = (todo) > {
        todo.completed = true
    }
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div key={todo.title}>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={handleComplete(todo._id)}>{todo.completed ? 'Completed' : 'Mark as complete'}</button>
                    </div>
                );
            })}
        </div>
    );
}
