const express = require('express');
const app = express();
const port = 3000;

let countOfNumberOfRequests = 0;

function totNumberOfReq(req, res, next) {
    countOfNumberOfRequests++;
    next(); 
}

app.use(totNumberOfReq);

app.get("/sum", (req, res) => {
    res.send(`Total number of resquests: ${countOfNumberOfRequests}`);
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})