import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import routeContact from "./routes/contactRoute.js";
import fs from "fs";
import yaml from "js-yaml";
import swaggerUi from "swagger-ui-express";
import corsMiddleware from './config/cors.js'
import errorMiddleware from "./middlewares/error.middleware.js";






dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(corsMiddleware);

const swaggerDocument = yaml.load(fs.readFileSync("./config/swagger.yaml", "utf8"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api", route);
app.use("/api", routeContact);
app.use(errorMiddleware);

 app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    res.status(status).json({ message: err.message });
  });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
});

const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => console.log(" MongoDB connection error:", error));
