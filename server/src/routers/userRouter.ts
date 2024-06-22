import express from "express";
import { signUp } from "../controller/user/auth";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.json({ message: "GET /api/user endpoint is working!" });
});

userRouter.post("/", signUp);
