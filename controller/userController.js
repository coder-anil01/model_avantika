import userModel from "../model/userModel.js";

export const createUser = async(req, res) => {
    const {name, uniq} = req.body;
    console.log(name, uniq)
    try {
        const user = await new userModel({name, uniq}).save();
        res.status(200).send({
            success: true,
            message:"Account Created",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Try Again",
        })
    }
}