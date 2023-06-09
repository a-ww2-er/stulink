import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectdb } from "./config/db";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errors";
//Import routes
import testRoute from "../src/routes/test";
import authRoute from "../src/routes/auth.route";
import projectRoute from "../src/routes/project"


//Configurations
dotenv.config();
const port = process.env.PORT || 5000;
const app: express.Application = express();

//Connect MongoDB
connectdb();

//Middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cors())

//Routes
app.use("/api/auth", authRoute);
app.use("/private", testRoute);
app.use("/projects", projectRoute)

//Error handling Middleware (must be called last)
app.use(errorHandler);

//Server Port with extra error handling
const server = app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error ${error}`);
  server.close(() => process.exit(1));
});
