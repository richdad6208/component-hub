import "dotenv/config";
import express from "express";
import { userRouter } from "./routers/userRouter";
import cors from "cors";
import morgan from "morgan";
import mysql from "mysql2";
const app = express();
const PORT = 5000;

export const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: "user",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/user", userRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
