const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample in-memory data
let todos = [
    { id: 1, title: 'Learn React', description: 'Study the basics of React.' },
    { id: 2, title: 'Build a Portfolio', description: 'Create a portfolio using React and Express.' },
    { id: 3, title: 'Complete linked-list', description: 'Complete it from Tuf+' }
];

// Get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.get('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const todo = todos.find(todo => todo.id === parseInt(id));

    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Add a new todo
app.post('/api/todos', (req, res) => {
    const { title, description } = req.body;
    const newTodo = { id: uuidv4(), title, description };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex !== -1) {
        todos[todoIndex] = { id, title, description };
        res.json(todos[todoIndex]);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex !== -1) {
        const deletedTodo = todos.splice(todoIndex, 1);
        res.json(deletedTodo[0]);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
