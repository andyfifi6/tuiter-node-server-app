import mongoose from 'mongoose';

const schema = mongoose.Schema({
    userName: String,
    topic: String,
    title: String,
    time: String,
    image: String,
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
    handle: String
}, {collection: 'tuits'});

export default schema;