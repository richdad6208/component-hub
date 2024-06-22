import { Request, Response } from "express";
import { connection } from "../..";

export const signUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, password, username],
    (err, result) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ code: 500, message: "Internal server error", data: null });
        return;
      }
      console.log(result);
    }
  );

  res.status(201).json({ code: 201, message: "sign up success", data: null });
};
