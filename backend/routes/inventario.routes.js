import { Router } from "express";
import { check } from 'express-validator';
import { validateDocuments } from "../middlewares/validate.documents.js";
import { getInventarios, getInventario, postInventarios, deleteInventarios, putInventarios } from "../controllers/inventario.controllers.js";

const router = Router();

router.get('/all', getInventarios);

router.get('/one/:id', getInventario);

router.post('/add', [
    check('producto', 'Product invalid').not().isEmpty(),
    validateDocuments
], postInventarios);

router.delete('/delete/:id', deleteInventarios);

router.put('/update/:id', putInventarios);

export default router;