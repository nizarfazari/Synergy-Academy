import express from 'express';
import { authorize, checkAccess } from '../middleware/authorization';
import { addCars, getCars, getCarskById ,deleteCars , updateCars} from "../controller/car-controller";
import uploadOnMemory from "../middleware/multer";
export const userRouter = express.Router()
userRouter.use(authorize, checkAccess(['super-admin']))



// CAR API
userRouter.delete("/api/v1/cars/:id", deleteCars);
userRouter.post("/api/v1/cars", uploadOnMemory.single('image_url'), addCars)
userRouter.put("/api/v1/cars/:id", uploadOnMemory.single('image_url'), updateCars)