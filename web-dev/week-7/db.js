import mongoose from 'mongoose';

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

