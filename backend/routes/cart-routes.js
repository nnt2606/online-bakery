import express from "express";
import { getCart, addToCart, removeFromCart, 
    updateCart } from "../controllers/cart-controller.js";

const cartRouter = express.Router()

cartRouter.get("/view/:id", getCart)
cartRouter.post("/add/:id", addToCart)
cartRouter.post("/remove/:id", removeFromCart)
cartRouter.post("/update/:id", updateCart)

export default cartRouter