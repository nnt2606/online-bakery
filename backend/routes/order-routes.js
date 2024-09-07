import express from "express";
import { getAllOrder, getOrderHistory, viewOrder, createOrder, 
    approveOrder, rejectOrder, closeOrder, cancelOrder } from "../controllers/order-controller.js";

const orderRouter = express.Router()

orderRouter.get("/all/:adminId", getAllOrder)
orderRouter.get("/history/:id", getOrderHistory)
orderRouter.get("/view/:id", viewOrder)
orderRouter.post("/create", createOrder)
orderRouter.get("/approve/:id", approveOrder)
orderRouter.get("/reject/:id", rejectOrder)
orderRouter.get("/close/:id", closeOrder)
orderRouter.delete("/cancel/:id", cancelOrder)

export default orderRouter