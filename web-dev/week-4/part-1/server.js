// Middleware to parse JSON request bodies
// Example route handlers
// Save user to database
// Example middleware to log requests
// Example custom error handling middleware
//TODO: In-memory todo list
//TODO: Get all todos
//TODO: Create a new todo
//TODO: Update a todo
//TODO: Delete a todo

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

//TODO: In-memory todo list
let todos = [{
    id: 1,
    title: "go to gym",
    description: "have to visit gym",
    done: true,
}, {
    id: 2,
    title: "eat lunch",
    description: "have to eat lunch",
    done: false,
}, {
    id: 3,
    title: "visit library at 4PM",
    description: "have to visit library",
    done: true,
}];

app.get("/api/v1/all-todos", function(req, res) {
    if(todos.length == 0) {
        res.json({
            message: "You have no todos currently"
        })
    } else {
        res.status(200).json(todos);
    }
});

app.post("/api/v1/todos", function(req, res) {

});

app.put("/api/v1/todos/:id", function(req, res) {

});

app.delete("/api/v1/delete/:id", function(req, res) {

});

app.listen(PORT, () => {
    console.log(`Listening on server ${PORT}`);
})

