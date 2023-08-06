import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from '../middlewares/validate.documents.js';
import { getVinedos, getVinedo, postVinedos, deleteVinedos, putVinedos } from '../controllers/vinedos.controllers.js';

const router = Router();

router.get('/all', getVinedos);

router.get('/getone/:id', getVinedo);

router.post('/add',[
    check('nombreViñedo', 'Vineyard invalid').not().isEmpty(),
    validateDocuments
], postVinedos);

router.delete('/delete/:id', deleteVinedos);

router.put('/update/:id', putVinedos);

export default router;