import { Router } from "express";
import { check } from 'express-validator';
import { validateDocuments } from "../middlewares/validate.documents.js";
import { getPedidos, getPedido, postPedidos, deletePedidos, putPedidos } from "../controllers/pedidos.controllers.js";

const router = Router();

router.get('/all', getPedidos);

router.get('/one/:id', getPedido);

router.post('/add', postPedidos);

router.delete('/delete/:id', deletePedidos);

router.put('/update/:id', putPedidos);

export default router;