import express from 'express';
import { authorize, checkAccess } from '../middleware/authorization';
import uploadOnMemory from "../middleware/multer";
export const userRouter = express.Router()
userRouter.use(authorize, checkAccess(['user']))
