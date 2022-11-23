import mongoose from "mongoose";
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    topic: String,
    handle: String,
    username: String,
    date: Date,
    image: String,
}, {collection: 'tuits'});

export default schema;