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
app.use(express.json())

//connect MongoDB
const connectdb = async () => {
  try {
    // await mongoose.connect(process.env.MONGO); 
    console.log(`Connected to MongoDB`);
    
  } catch (error) {
    console.log(error);
  }
};

//routes
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world");
});
app.use("/dashboard", dashboardRoute);

//port
app.listen(port, () => {
  connectdb()
  console.log(`server running on port ${port}`);
});
