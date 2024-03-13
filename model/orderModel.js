import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    videourl:{
        type:String,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
},{timestamps:true});

export default mongoose.model('order', orderSchema);