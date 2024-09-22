const express = require('express');
const app = express();
const PORT = 3000;
const jwt = require('jsonwebtoken');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');


app.use(express.json());
app.use("/user", userRouter);
app.use("course", courseRouter);


app.get()

async function main() {
   // ! secure the db connection string before remote commit
   await mongoose.connect("");
   app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
   });
}

