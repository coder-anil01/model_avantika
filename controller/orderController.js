import orderModel from "../model/orderModel.js";
import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

// CREATE
export const createOrder = async(req, res) => {
    const {payscreenshot, userId} = req.body;
    try {
        const hostimage = await cloudinary.uploader.upload(payscreenshot, {folder: "Avantika/avantika-pay"});
        const order= await new orderModel({payscreenshot: hostimage.secure_url, userId}).save();
        res.status(200).send({
            success: true,
            message: "Order created successfully",
            orderId:order.id,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Try Again",
        })
    }
}

// get Order
export const getOrder = async(req, res) => {
    const {orderId} = req.body;
    try {
        let orders = [];
        for (let index = 0; index < orderId.length; index++) {
            const order = await orderModel.findById(orderId[index]);
            orders.push(order);
        }
        res.status(200).send({
            success: true,
            orders,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Try Again",
        })
    }
}




//ADMIN
export const getAllOrder = async(req, res) => {
    try {
        const orders = await orderModel.find({});
        res.status(200).send({
            success: true,
            orders,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Try Again",
        })
    }
}

//ADMIN
export const updateOrder = async(req, res) => {
    const {id, status, videourl} = req.body;
    try {
        const order = await orderModel.findByIdAndUpdate(id, {videourl, status}, {new:true});
        res.status(200).send({
            success:true,
            message: "Updated Successfiully",
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Try Again",
        })
    }
}