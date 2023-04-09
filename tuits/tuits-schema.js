import mongoose from 'mongoose';
const schema = mongoose.Schema({

    icon:String,
    topic:String,
    userName:String,
    handle:String,
    time:String,
    title:String,
    replies:Number,
    retuits:Number,
    tuit: String,
    likes: Number,
    liked: Boolean,
}, {collection: 'tuits'});
export default schema;