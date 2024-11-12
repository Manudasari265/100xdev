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

exports.getAllTodos = (req, res) => {
    if(todos.length == 0) {
        res.json({
            message: "You have no todos currently"
        })
    } else {
        res.status(200).json(todos);
    }
};

exports.createTodo = (req, res) => {
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
};

exports.updateTodo = (req, res) => {
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
};

exports.deleteTodo = (req, res) => {
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
};