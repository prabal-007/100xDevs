const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster0.zrkiz9r.mongodb.net/todo-app");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}