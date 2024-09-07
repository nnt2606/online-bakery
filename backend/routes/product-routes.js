import express from "express";
import { getAllProducts, searchProducts, getProductsByCategory, viewProduct, 
    addProduct, updateProduct, removeProduct } from "../controllers/product-controller.js";

const productRouter = express.Router()

productRouter.get("/all", getAllProducts)
productRouter.get("/search", searchProducts)
productRouter.get("/category", getProductsByCategory)
productRouter.get("/view/:id", viewProduct)
productRouter.post("/add", addProduct)
productRouter.put("/update/:id", updateProduct)
productRouter.delete("/remove/:id", removeProduct)

export default productRouter