import express from "express";
import multer from "multer";
import { createOrder, getAllOrder, getOrder, updateOrder } from "../controller/orderController.js";

const route = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

route.post('/create', upload.single('file'), createOrder);

route.post('/getorder', getOrder);

route.get('/getallorder', getAllOrder);

route.post('/update', updateOrder);


export default route;