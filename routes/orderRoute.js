import express from "express";
import multer from "multer";
import { createOrder, getOrder } from "../controller/orderController.js";

const route = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

route.post('/create', upload.single('file'), createOrder);

route.post('/getorder', getOrder);


export default route;