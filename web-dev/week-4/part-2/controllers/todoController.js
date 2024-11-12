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

