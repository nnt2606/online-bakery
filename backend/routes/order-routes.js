import express from "express";
import { getAllOrder, getOrderHistory, viewOrder, createOrder, 
    approveOrder, rejectOrder, closeOrder, cancelOrder } from "../controllers/order-controller.js";

const orderRouter = express.Router()

orderRouter.get("/all/:adminId", getAllOrder)
orderRouter.get("/history/:id", getOrderHistory)
orderRouter.get("/view/:id", viewOrder)
orderRouter.post("/create", createOrder)
orderRouter.post("/approve/:id", approveOrder)
orderRouter.post("/reject/:id", rejectOrder)
orderRouter.post("/close/:id", closeOrder)
orderRouter.post("/cancel/:id", cancelOrder)

export default orderRouter