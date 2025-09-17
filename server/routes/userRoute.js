import express from "express";

import {
  create,
  deleteUser,
  getAllUsers,
  getUserById,
  update,
} from "../controller/userController.js";
import { loginUser } from "../controller/authController.js";

const route = express.Router();


route.post("/auth/register", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.patch("/update/user/:id", update);
route.delete("/delete/user/:id", deleteUser);
route.post("/auth/login", loginUser);




export default route;
