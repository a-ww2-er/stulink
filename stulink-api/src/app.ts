import express from "express";
const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world ssss");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
