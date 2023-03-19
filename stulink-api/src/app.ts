import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

//import routes
import dashboardRoute from "./routes/dashboardRoute";

//configurations
dotenv.config();
const port = process.env.PORT;
const app: express.Application = express();

//middlewares
app.use(express.json());

//connect MongoDB
const connectdb = async () => {
  try {
   const conn = await mongoose.connect(process.env.MONGO, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB :${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//routes
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world");
});
app.use("/dashboard", dashboardRoute);

//port
app.listen(port, () => {
  connectdb();
  console.log(`server running on port ${port}`);
});
