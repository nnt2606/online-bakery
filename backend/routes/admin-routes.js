import express from "express";
import { addAdmin, adminSignin, editAdmin, deleteAdmin } from "../controllers/admin-controller.js";

const adminRouter = express.Router()

adminRouter.post("/add", addAdmin)
adminRouter.post("/signin", adminSignin)
adminRouter.put("/edit/:id", editAdmin)
adminRouter.delete("/remove/:id", deleteAdmin)

export default adminRouter