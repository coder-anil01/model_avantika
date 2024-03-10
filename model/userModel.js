import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    uniq:{
        type: String,
    },
    role:{
        type: String,
        default: 0,
    },
},{timestamps:true});

export default mongoose.model('user', userSchema);