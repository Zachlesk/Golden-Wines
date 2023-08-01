import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from '../middlewares/validate.documents';
import { getMarcas, getMarca, postMarcas, deleteMarcas, putMarcas } from '../controllers/marcas.controllers';

const router = Router();

router.get('all', getMarcas);

router.get('getone', getMarca);

router.post('add',[
    check('nombreMarca', 'Name invalid').not().isEmpty(),
    validateDocuments
], postMarcas);

router.delete('delete', deleteMarcas);

router.put('update', putMarcas);

export default router;