import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    payscreenshot:{
        type:String,
    },
    videourl:{
        type:String,
    },
    status:{
        type: String,
        default: 'Please Wait...',
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
},{timestamps:true});

export default mongoose.model('order', orderSchema);