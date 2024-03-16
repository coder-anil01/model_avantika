import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    number:{
        type: String,
    },
    orderCount:{
        type: String,
    },
    role:{
        type: String,
        default: 0,
    },
},{timestamps:true});

export default mongoose.model('user', userSchema);