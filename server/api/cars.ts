import { Request, Response } from "express";

import { CarsModel } from "../../model/cars";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import cloudinary from "../middleware/cloudinary";

export async function getCars(req: Request, res: Response) {
  const { q } = req.query;

  if (!q) {
    const books = await CarsModel.query();
    return res.status(200).json(books);
  }

  const books = await CarsModel.query()
    .whereLike("size", `%${q}%`)
    .orWhereLike("name", `%${q}%`);

  return res.status(200).json(books);
}

export async function getCarskById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const cars = await CarsModel.query().findById(id).throwIfNotFound();
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

export async function addCars(req:Request, res:Response){
    if(!req.body){
        return res.status(400).send("Invalid Request")
    }

    const fileBase64 = req.file?.buffer.toString("base64")
    const file = `data:${req.file?.mimetype};base64,${fileBase64}`

    cloudinary.uploader.upload(file, async function(err:UploadApiErrorResponse,
        result:UploadApiResponse){
        if(!!err){
            console.log(err)
            return res.status(400).send("Gagal upload file")
        }

        const books = await CarsModel.query().insert(
            {
                ...req.body,
                image_url: result.url
            }
        ).returning('*')

        return res.status(201).json(books)
    })
}

export async function updateCars(req:Request, res:Response){
    const { id } = req.params

    if(!req.file){
        try{
            const books = await CarsModel.query()
                .where({ id })
                .patch(req.body)
                .throwIfNotFound()
                .returning("*");

            return res.status(200).send("Data berhasil di update")
        }catch (e){
            return res.status(404).send("Data tidak ditemukan!")
        }
    }

    const fileBase64 = req.file.buffer.toString("base64")
    const file = `data:${req.file.mimetype};base64,${fileBase64}`

    cloudinary.uploader.upload(file, async function(err:UploadApiErrorResponse,
        result:UploadApiResponse){
        if(!!err){
            console.log(err)
            return res.status(400).send("Gagal upload file")
        }

        try{
            const books = await CarsModel.query()
                .where({ id })
                .patch({
                    ...req.body,
                    image_url: result.url
                })
                .throwIfNotFound()
                .returning("*");

            return res.status(200).send("Data berhasil di update")
        }catch (e){
            return res.status(404).send("Data tidak ditemukan!")
        }
    })
}
