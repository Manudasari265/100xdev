const express = require('express');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use("/user", userRouter);
app.use("course", courseRouter);


app.get()

async function main() {
   // ! secure the db connection string before remote commit
   await mongoose.connect("");
   app.listen(port, () => {
      console.log(`Server is running on ${port}`);
   });
}

