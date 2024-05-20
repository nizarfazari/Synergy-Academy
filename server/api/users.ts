import { Request, Response } from "express";
import { ErrorResponse } from "../../errors/error-response";
import jwt from "jsonwebtoken";
import { UserModel } from "../../model/users";

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = UserModel.query().where("email", "=", email);
  if (!user) {
    throw new ErrorResponse(403, "User tidak ditemukan");
  }

  const token = jwt.sign(user, process.env.MY_SECRET!, { expiresIn: "1h" });

  res.cookie("token", token, {
    httpOnly: true,
  });

  
}
