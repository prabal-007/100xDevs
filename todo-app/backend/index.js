const express = require("express");
const { createTodo, updateTodo } = require('./types');
const { todo } = require("./db");
const db = require("./db");

const app = express();
const port = 3000

app.use(express.json());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put in mondo db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created successfully",
    })

});

app.get('/todos', async (req, res) => {
    const todos = await db.find({})
    res.json({
        todos
    })
});

app.put('/completed', async (req, res) => {
    // to update todo
    updatePayload = req.body;
    parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Wrong inputs",
        })
        return;
    }

    await db.update({
        _id: req.body._id
    }, {
        completed: true
    }) 

    res.json({
        msg: "Todo marked as completed",
    })
})

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});