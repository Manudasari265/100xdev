const express = resuire('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post("/signup", (req, res) => {

});

app.post("/signin", (req, res) => {

});

app.post("/todo", (req, res) = {

});

app.get("/todos", (req, res) => {

});

app.listen(port, (req, res) => {
    console.log(`Server is listening on ${port}`);
})