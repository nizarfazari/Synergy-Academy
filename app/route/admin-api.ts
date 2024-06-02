import express from 'express';
import { authorize, checkAccess } from '../middleware/authorization';
import { addCars, getCars, getCarskById ,deleteCars , updateCars} from "../controller/car-controller";
import uploadOnMemory from "../middleware/multer";
import { whoAmI } from '../controller/user-controllers';
export const adminRouter = express.Router()
adminRouter.use(authorize, checkAccess(['admin']))

// API USER
adminRouter.get("api/v1/me" , whoAmI)

// CAR API
adminRouter.delete("/api/v1/cars/:id", deleteCars);
adminRouter.post("/api/v1/cars", uploadOnMemory.single('image_url'), addCars)
adminRouter.put("/api/v1/cars/:id", uploadOnMemory.single('image_url'), updateCars)