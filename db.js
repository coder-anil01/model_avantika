import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const mongouri = process.env.MONGODB_URL;

const conectToDatabase = async () => {
    try {
        await mongoose.connect(mongouri)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}

export default conectToDatabase;