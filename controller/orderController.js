import orderModel from "../model/orderModel.js"
import userModel from "../model/userModel.js";

export const getOrder = async(req, res) => {
    const {number, orderId} = req.body;
    console.log("number", number);
    console.log("orderid", orderId);
    
    try {
        const existUser = await userModel.findOne({number});
        let orderCount = 0;
        let user = existUser;
        if(!existUser){
            const newUser = await new userModel({number, orderCount:0}).save();
            user = newUser;
        }else{
            orderCount = parseInt(existUser.orderCount);
        }
        const order = await orderModel.findByIdAndDelete(orderId);
        if(order){
            await userModel.findOneAndUpdate({number}, {orderCount:(orderCount+1)});
            res.status(200).send({
                success: true,
                orderCount: (orderCount+1),
                user
            })
        }else{
            res.status(200).send({
                success: false,
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
        })
    }
}



// ADMIN
export const createOrder = async(req, res) => {
    try {
        const order = await new orderModel({}).save();
        console.log("order",order)
        res.status(200).send({
            success:true,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
        })
    }
}

// GET ALL ORDER
export const getAllOrder = async(req, res) => {
    try {
        const orders = await orderModel.find();
        res.status(200).send({
            success: true,
            orders
        })
    } catch (error) {
        res.status(500).send({
            success: false,
        })
    }
}