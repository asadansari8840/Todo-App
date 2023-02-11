import express from "express";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const errorMiddleWare = require("./middlewares/error");
const app = express();

if (process.env.ENVIRONMENT !== "PRODUCTION") {
  dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//Adding rourtes
const todoRoute = require("./routes/todoRoutes");

app.use("/api", todoRoute);

//adding middleware for errors
app.use(errorMiddleWare);

export default app;
