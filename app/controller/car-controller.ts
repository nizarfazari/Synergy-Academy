import { Request, Response, NextFunction } from "express";

import { CarsModel } from "../model/car";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import cloudinary from "../middleware/cloudinary";
import { ErrorResponse } from "../errors/error-response";
import CarServices from "../services/car-services";
import { CarsValidation } from "../validation/car-validation";

export async function getCars(req: Request, res: Response) {
  const { q } = req.query;

  const cars = await CarServices.list()
  
  return res.status(200).json({
    data : cars.data,
    count : cars.total
  });
}

export async function getCarskById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const cars = await CarServices.getById(id);
    return res.status(200).json(cars);
  } catch (e) {
    return res.status(404).send("Data tidak ditemukan!");
  }
}

export async function deleteCars(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const cars = await CarsModel.query().deleteById(id).throwIfNotFound();
    return res.status(200).send("Data berhasil di hapus");
  } catch (e) {
    return res.status(404).send("Data tidak ditemukan!");
  }
}

export async function addCars(req: Request, res: Response, next: NextFunction) {
  try {
    const carRequest = req.body
    const books = await CarServices.create(carRequest, req.file);

    res.status(201).json({
      data: books,
    });
  } catch (error) {
    next(error);
  }
}

export async function updateCars(req: Request, res: Response) {
  const { id } = req.params;

  if (!req.file) {
    try {
      const books = await CarsModel.query()
        .where({ id })
        .patch(req.body)
        .throwIfNotFound()
        .returning("*");

      return res.status(200).send("Data berhasil di update");
    } catch (e) {
      return res.status(404).send("Data tidak ditemukan!");
    }
  }

  const fileBase64 = req.file.buffer.toString("base64");
  const file = `data:${req.file.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(
    file,
    async function (err: UploadApiErrorResponse, result: UploadApiResponse) {
      if (!!err) {
        console.log(err);
        return res.status(400).send("Gagal upload file");
      }

      try {
        const books = await CarsModel.query()
          .where({ id })
          .patch({
            ...req.body,
            image_url: result.url,
          })
          .throwIfNotFound()
          .returning("*");

        return res.status(200).send("Data berhasil di update");
      } catch (e) {
        return res.status(404).send("Data tidak ditemukan!");
      }
    }
  );
}
