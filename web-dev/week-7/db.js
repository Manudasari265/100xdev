import mongoose from 'mongoose';
import { userInfo } from 'os';

const Schema = mongoose.schema;
const ObjectId = Schema.objectId;

const User = new Schema ( {
    name: String,
    email: { type: String, unique: true },
    password: String
});

const Todo = new Schema ( {
    userId: ObjectId,
    title: String,
    done: Boolean
});

const UserModel = mongoose.model('users', User);
const UserTodo = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    UserTodo
};

