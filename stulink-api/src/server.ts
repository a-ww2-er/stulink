import express from "express";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

//import routes
import authRoute from "./routes/auth.route";

//configurations
dotenv.config();
const port = process.env.PORT || 5000;
const app: express.Application = express();
mongoose.set("strictQuery", true);

//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname,'./stulink-client/dist')))
app.use(cors({ origin: "http://127.0.0.1:4000" }));

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
connectdb();

//routes
// app.get("/", (req: express.Request, res: express.Response) => {
//   res.send("hello world");
// });
app.use("/api/auth", authRoute);
app.get("*",(req,res)=>{
  
  res.sendFile(path.join(__dirname,"../../stulink-client/dist/index.html"))
})

//port
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});