
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

const logIncomingRequests = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next();
}

//TODO: In-memory todo list
let todos = [{
    id: 1,
    title: "go to gym",
    description: "have to visit gym",
    completed: true,
}, {
    id: 2,
    title: "eat lunch",
    description: "have to eat lunch",
    completed: false,
}, {
    id: 3,
    title: "visit library at 4PM",
    description: "have to visit library",
    completed: true,
}];

//TODO: Get all todos
app.get("/api/v1/todos", function(req, res) {
    if(todos.length == 0) {
        res.json({
            message: "You have no todos currently"
        })
    } else {
        res.status(200).json(todos);
    }
});

//TODO: Create a new todo
app.post("/api/v1/todos", async function(req, res) {
    const { title, description, completed } = req.body
    
   if(!title) {
    return res.status(400).json({
        error: "Title is required",
    })
   }
   const newTodos = {
    id: todos.length + 1,
    title: title,
    description: description,
    completed: completed || false,
   }
   todos.push(newTodos);

    res.status(201).json({
        message: "Your todos have been updated",
        newTodos
    })
});

//TODO: Update a todo
app.put("/api/v1/todos/:id", function(req, res) {
    const id = req.params.id;
    const { title, description, completed } = req.body;
    const todo = todos.find((t) => t.id === parseInt(id));
    
    if(!todo) {
        return res.status(404).json({
            error: "Task not found",
        })
    }
    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.completed = completed !== undefined ? completed : todo.completed;

    res.status(200).json(todo, {
        message: "Task have been successfully updated",
    })
});

//TODO: Delete a todo
app.delete("/api/v1/todos/:id", function(req, res) {
    const { id } = req.params;
    const index = todos.findIndex((ind) => ind.id === parseInt(id));

    if(index === -1 || index == false || index === undefined) {
        res.status(404).json({
            error: "Can't find the task"
        })
    }
    const deletedTodo = todos.splice(index, 1)[0];
    res.status(200).json({
        message: "Successfully deleted the task",
        deletedTodo
    })
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: "Internal server error"
    })
})

app.listen(PORT, () => {
    console.log(`Listening on server ${PORT}`);
})