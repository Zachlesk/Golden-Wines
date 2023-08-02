import { Router } from "express";
import { check } from 'express-validator';
import { validateDocuments } from "../middlewares/validate.documents.js";
import { getCotizaciones, getCotizacion, postCotizaciones, deleteCotizaciones, putCotizaciones } from "../controllers/cotizaciones.controllers.js";

const router = Router();

router.get('/all', getCotizacion);

router.get('/one/:id', getCotizacion);

router.post('/add', postCotizaciones);

router.delete('/delete/:id', deleteCotizaciones);

router.put('/update/:id', putCotizaciones);

export default router;