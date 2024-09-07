import express from "express";
import { addAdmin, adminSignin, adminSignout, 
    editAdmin, updateAdmin, deleteAdmin } from "../controllers/admin-controller.js";

const adminRouter = express.Router()

adminRouter.post("/add", addAdmin)
adminRouter.post("/signin", adminSignin)
adminRouter.get("/signout/:id", adminSignout)
adminRouter.put("/edit/:id", editAdmin)
adminRouter.put("/update/:id", updateAdmin)
adminRouter.delete("/remove/:id", deleteAdmin)

export default adminRouter