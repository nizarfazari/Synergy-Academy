import express from 'express';
import { authorize, checkAccess } from '../middleware/authorization';
import uploadOnMemory from "../middleware/multer";
import { whoAmI } from '../controller/user-controllers';
export const userRouter = express.Router()
userRouter.use(authorize, checkAccess(['user']))

// USER API
userRouter.get("api/v1/me" , whoAmI)