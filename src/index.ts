import express from "express";
//Routes
import diaryRouter from "./routes/diaries.routes";

const app = express();


app.use(express.json());

const PORT = 3000;

app.get("/route", (_req, res) => {
  console.log("hello world!!")

  res.send("hello");
});

app.use("/api/v1/diaries", diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
