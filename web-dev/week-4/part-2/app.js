const express = require('express');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use("api/v1/todos", routes);

module.exports = {
    app,
}