import { Router } from "express";
import { check } from 'express-validator';
import { validateDocuments } from "../middlewares/validate.documents.js";
import { getProveedores, getProveedor, postProveedores, deleteProveedores, putProveedores } from "../controllers/proveedores.controllers.js";

const router = Router();

router.get('/all', getProveedores);

router.get('/one/:id', getProveedor);

router.post('/add', [
    check('nombreProveedor', 'Name invalid').not().isEmpty(),
    validateDocuments
], postProveedores);

router.delete('/delete/:id', deleteProveedores);

router.put('/update/:id', putProveedores);

export default router;