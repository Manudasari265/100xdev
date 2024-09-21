const { mongoose } = require('mongoose');
const Schema = mongoose.schema; 
const ObjectId = Schema.objectId; 
const dotenv = require('dotenv');

dotenv.config();
const dbUrl = process.env.DATABASE_URL;

// ! secure the db connection string before remote commit
mongoose.connect("");

// TODO: learn about references and mapping for mapping the ObjectId's
const Users = new Schema ( {
    _id: ObjectId,
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

const Admin = new Schema ( {
    _id: ObjectId,
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

const Course = new Schema ( {
    _id: ObjectId,
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId,
})

const Purchase = new Schema ( {
    _id: ObjectId,
    courseId: ObjectId,
    userId: ObjectId
})

// TODO: learn about references and mapping for mapping the ObjectId's

const userModel = mongoose.model("user", "Users");
const adminModel = mongoose.model("admin", "Admin");
const courseModel = mongoose.model("course", "Course");
const purchaseModel = mongoose.model("purchase", "Purchase");

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}