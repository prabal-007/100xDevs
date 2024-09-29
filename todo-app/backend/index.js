const express = require("express");
// const createTodo = require("createTodo");
// const updateTodo = require("updateTodo");
const { createTodo, updateTodo } = require('./types')

const app = express();
const port = 3000

app.use(express.json());

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put in mondo db

});

app.get('/todos', (req, res) => {
    res.send('hello World');
});

app.put('/completed', (req, res) => {
    // to update todo
    updatePayload = req.body;
    parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong inputs",
        })
        return;
    }
    // update in mondo db
})

app.listen(port, (req, res) => {
    console.lof(`Server running on port ${port}`);
});