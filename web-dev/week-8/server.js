/*
Create a course selling app
    - Initialize a new Node.js project
    - Add Express, jsonwebtoken, mongoose to it as a dependency
    - Create index.js
    - Add route skeleton for user login, signup, purchase a course, sees all course, see the purchased course
    - Add routes for admin login, admin signup, create a course, delete a course, add course content.
    - Add middlewares for user and admin auth
    - Add a database (mongodb), use dotenv to store the database connection string
    - Define the schema for User, Admin, Course, Purchase
    - Complete the routes for user login, signup, purchase a course, see course

Assignment #1 - Create a .env file and add the PORT and MongoDB URL. Access these values in the index.js file.
*/

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
require('dotenv').config();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("api/v1/user", userRouter);
app.use("api/v1/course", courseRouter);


app.get()

async function main() {
   // ! secure the db connection string before remote commit
   try{
      await mongoose.connect(process.env.DATABASE_URL);
      console.log(`Connected to the database successfully`);
      app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
      });
   } catch (err) {
      console.log(`Failed to connect to the database or re-start the server`);
   }
}

