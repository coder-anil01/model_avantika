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
    const {payscreenshot} = req.body;
    try {
        const hostimage = await cloudinary.uploader.upload(payscreenshot, {folder: "Avantika/avantika-pay"});
        const order= await new orderModel({payscreenshot: hostimage.secure_url}).save();
        res.status(200).send({
            success: true,
            message: "Order created successfully",
            order,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Try Again",
        })
    }
}

// get
export const getOrder = async(req, res) => {
    const {id} = req.body;
    try {
        const order = await  orderModel.findById(id);
        console.log(order)
        res.status(200).send({
            success: true,
            order,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Try Again",
        })
    }
}