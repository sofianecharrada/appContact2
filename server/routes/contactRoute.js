import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
} from "../controller/contactController.js";
import { requireAuth } from "../middlewares/auth.middleware.js";



const routeContact = express.Router();


routeContact.post("/contacts", requireAuth, createContact);
routeContact.get("/contacts",  requireAuth, getAllContacts)
routeContact.get("/contact/:id",  getContactById);
routeContact.patch("/contact/:id" , updateContact);
routeContact.delete("/contact/:id", deleteContact);

export default routeContact;
