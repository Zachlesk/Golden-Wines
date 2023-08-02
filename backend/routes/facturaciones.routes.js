import { Router } from "express";
import { check } from 'express-validator';
import { validateDocuments } from "../middlewares/validate.documents.js";
import { getFacturaciones, getFacturacion, postFacturaciones, deleteFacturaciones, putFacturaciones } from "../controllers/facturaciones.controllers.js";

const router = Router();

router.get('/all', getFacturaciones);

router.get('/one/:id', getFacturacion);

router.post('/add', postFacturaciones);

router.delete('/delete/:id', deleteFacturaciones);

router.put('/update/:id', putFacturaciones);

export default router;