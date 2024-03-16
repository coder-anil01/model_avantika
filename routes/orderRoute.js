import express from "express";
import { createOrder, getAllOrder, getOrder } from "../controller/orderController.js";

const route = express.Router();

// USER
route.post('/getOrder', getOrder);

// ADMIN
route.post('/createOrder', createOrder);

route.get('/getallorder', getAllOrder);



export default route;