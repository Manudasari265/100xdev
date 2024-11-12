const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

const logRequests = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logRequests);

app.get('/api/hello', function(req, res) {
    res.status(200).json({
        message: "hello!, world"
    })
})

app.post('/api/users', function(req, res, next) {
    const { firstName } = req.body;
    const { email } = req.body;
    if(!name || !email) {
        const error = new Error('Name and email are required');
        error.status = 400;
        return next(error);
    }
    res.status(201).json({
        user: {
            firstName: firstName,
            email: email,
        }
    })
})