import express from "express";
import { Request, Response } from "express";

const routes = express.Router();
import transferRoutes from "./transfer-routes";

routes.get('/', (req: Request, res: Response)=> {
    res.status(200).json({
        success: true,
        message: 'Assignment Week 15 - Hello!'
    });
});

routes.use('/', transferRoutes);

export default routes;