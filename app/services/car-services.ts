import { ValidationResult } from "joi";
import { ErrorResponse } from "../errors/error-response";
import cloudinary from "../middleware/cloudinary";
import { Cars } from "../model/car";
import CarsRepostory from "../repositories/car-repository";
import { CarsValidation } from "../validation/car-validation";

export default class CarServices {
  static async create(RequestBody: Cars, RequestFile : any) {
    const { value, error } = CarsValidation.CREATE.validate(RequestBody,  { abortEarly: false });
    if(error){
      throw new ErrorResponse(400, error.details.map(detail => detail.message).join(','))
    }
    const fileUplaod = await this.upload(RequestFile);
    return CarsRepostory.create({
      ...value,
      image_url : fileUplaod
    });
  }

  static async list(){
    const cars = await CarsRepostory.list()
   return cars
  }

  static async upload(file: any) {
    try {
      const fileBase64 = file?.buffer.toString("base64");
      const fileString = `data:${file?.mimetype};base64,${fileBase64}`;
      const result = await cloudinary.uploader.upload(fileString);
      return result.url;
    } catch (e) {
      throw new ErrorResponse(400, "Gagal upload pada cloudinary");
    }
  }
}
