import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from '../middlewares/validate.documents.js';
import { getViñedos, getViñedo, postViñedos, deleteViñedos, putViñedos } from '../controllers/viñedos.controllers.js';

const router = Router();

router.get('/all', getViñedos);

router.get('/getone/:id', getViñedo);

router.post('/add',[
    check('nombreViñedo', 'Vineyard invalid').not().isEmpty(),
    validateDocuments
], postViñedos);

router.delete('/delete/:id', deleteViñedos);

router.put('/update/:id', putViñedos);

export default router;