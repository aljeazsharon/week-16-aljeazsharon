import express from "express";
import cors from "cors";
import clientAccess from '../middleware/cors-middleware'
import { getAllTransferList, getTransferList, createTransferData, updateTransferData, deleteTransferData } from "../controller/transfer-controller";

const transferRoutes = express.Router();

transferRoutes.get('/transfer', cors(clientAccess.limitedClient), getAllTransferList);
transferRoutes.get('/transfer/:id', cors(clientAccess.limitedClient), getTransferList);
transferRoutes.post('/transfer', cors(clientAccess.limitedClient), createTransferData);

transferRoutes.options('/transfer/:id', cors(clientAccess.globalClient));
transferRoutes.options('/transfer/:id', cors(clientAccess.limitedClient));
transferRoutes.post('/transfer', cors(clientAccess.limitedClient));

transferRoutes.patch('/transfer/:id', cors(clientAccess.globalClient), updateTransferData);
transferRoutes.delete('/transfer/:id', cors(clientAccess.globalClient), deleteTransferData);

export default transferRoutes;