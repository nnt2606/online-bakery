import express from "express";
import { signup, signin, editAccount, deleteAccount } from "../controllers/account-controller.js";

const accountRouter = express.Router()

accountRouter.post("/signup", signup)
accountRouter.post("/signin", signin)
accountRouter.put("/edit/:id", editAccount)
accountRouter.delete("/remove/:id", deleteAccount)

export default accountRouter