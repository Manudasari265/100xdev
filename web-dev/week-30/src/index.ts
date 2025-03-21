import express from 'express';

const app = express();

app.get("/cpu", (req, res) => {
    const startTime = Date.now();
})