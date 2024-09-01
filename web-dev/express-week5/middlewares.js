const express = require('express');
const app = express();
const port = 3000;

// Middleware function 
app.use(function(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(`${req.url} ${req.method} ${timestamp}`);
    next();
})

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.listen(port, () =>{
    console.log(`Server running on ${port}`);
});