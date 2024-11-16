import mongoose, { model, Schema } from 'mongoose';

mongoose.connect(""); //TODO create a database brainly and connect it 

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{ types: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true},
})

export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);


