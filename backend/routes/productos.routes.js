import { Router } from "express";
import { check } from 'express-validator';
import { validateDocuments } from "../middlewares/validate.documents.js";
import { getProductos, getProducto, postProductos, deleteProductos, putProductos } from "../controllers/productos.controllers.js";

const router = Router();

router.get('/all', getProductos);

router.get('/one/:id', getProducto);

router.post('/add', [
    check('nombreProducto', 'Name invalid').not().isEmpty(),
    validateDocuments
], postProductos);

router.delete('/delete/:id', deleteProductos);

router.put('/update/:id', putProductos);

export default router;