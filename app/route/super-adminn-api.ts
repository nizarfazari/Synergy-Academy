import express from 'express';
import { authorize, checkAccess } from '../middleware/authorization';
import { addCars, getCars, getCarskById ,deleteCars , updateCars} from "../controller/car-controller";
import uploadOnMemory from "../middleware/multer";
import { whoAmI } from '../controller/user-controllers';
export const superAdminRouter = express.Router()
superAdminRouter.use(authorize, checkAccess(['super-admin']))


// API USER
superAdminRouter.get("api/v1/me" , whoAmI)

// CAR API
superAdminRouter.delete("/api/v1/cars/:id", deleteCars);
superAdminRouter.post("/api/v1/cars", uploadOnMemory.single('image_url'), addCars)
superAdminRouter.put("/api/v1/cars/:id", uploadOnMemory.single('image_url'), updateCars)