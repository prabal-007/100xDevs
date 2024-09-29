const express = require("express");
const app = express();
const port = 3000

app.use(express.json());

app.post('/todo', (req, res) => {

});

app.get('/todos', (req, res) => {
    res.send('hello World');
});

app.put('/completed', (req, res) => {
    // to update todo
})

app.listen(port, (req, res) => {
    console.lof(`Server running on port ${port}`);
});