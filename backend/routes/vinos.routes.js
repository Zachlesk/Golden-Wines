import { Router } from "express";
import { check } from 'express-validator';
import { validateDocuments } from "../middlewares/validate.documents.js";
import { getVinos, getVino, postVinos, deleteVinos, putVinos} from "../controllers/vinos.controllers.js";

const router = Router();

router.get('/all', getVinos);

router.get('/one/:id', getVino);

router.post('/add', [
    check('nombre', 'Name invalid').not().isEmpty(),
    validateDocuments
], postVinos);

router.delete('/delete/:id', deleteVinos);

router.put('/update/:id', putVinos);

export default router;