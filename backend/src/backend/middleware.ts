import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import  JWT_SECRET  from './config';

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log(authHeader)
        return res.status(403).json({
            message: "Not authenticated"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded: any = jwt.verify(token, JWT_SECRET);
        if (decoded) {
            const uId = decoded.userId;
            req.userId = uId;
            console.log(token);
            next();
        } else {
            return res.json({
                message: "Token invalid"
            });
        }
    } catch (error) {
        res.json({
            message: "Invalid token"
        });
    }
};
