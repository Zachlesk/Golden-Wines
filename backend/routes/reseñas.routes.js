import { Router } from "express";
import { check } from 'express-validator';
import { validateDocuments } from "../middlewares/validate.documents.js";
import { getReseñas, getReseña, postReseñas, deleteReseñas, putReseñas } from "../controllers/reseñas.controllers.js";

const router = Router();

router.get('/all', getReseñas);

router.get('/one/:id', getReseña);

router.post('/add',postReseñas);

router.delete('/delete/:id', deleteReseñas);

router.put('/update/:id', putReseñas);

export default router;