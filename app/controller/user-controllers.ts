import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../errors/error-response";
import jwt from "jsonwebtoken";
import {
  RequestUserLogin,
  RequestUserRegister,
  User,
  UserModel,
} from "../model/user";
import UserServices from "../services/user-services";

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const userRequest: RequestUserLogin = req.body as RequestUserLogin;

    const user = await UserServices.login(userRequest);

    res.status(201).send({
      data: user,
      message: "Berhasil Membuat User",
    });
  } catch (error) {
    next(error);
  }
}

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userRequest: RequestUserRegister = req.body as RequestUserRegister;
    const user = await UserServices.register(userRequest);

    res.status(201).send({
      data: user,
      message: "Berhasil Membuat User",
    });
  } catch (error) {
    next(error);
  }
}

export async function whoAmI(request: any, res: Response, next: NextFunction) {
  try {
    res.status(200).json({
      status: "OK",
      message: "Success",
      data: request.user,
    });
  } catch (error) {
    next(error);
  }
}
