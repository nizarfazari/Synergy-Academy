import { Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { UserModel } from "../model/user";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function authorize(req: any, res: Response, next: NextFunction) {
    try {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.split("Bearer ")[1]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const tokenPayload = jwt.verify(token, "halosayang") as any;

        req.user = await UserModel
            .query()
            .findOne({ id: tokenPayload.id })

        next();

    } catch (err) {
        res.status(401).json({
            message: "Unauthorized",
        })
    }
}

export function checkAccess(role: string[]) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (req: any, res: Response, next: NextFunction) => {
        if (!role.includes(req.user.role)) {
            return res.status(401).json({
                message: "You cannot access this feature!",
            })
        }

        next()
    }
}