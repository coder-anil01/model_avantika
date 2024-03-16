import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    status:{
        type: String,
    },
});

export default mongoose.model('order', orderSchema);