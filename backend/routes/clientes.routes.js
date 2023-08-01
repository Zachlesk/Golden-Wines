import { Router } from 'express';
import { check } from 'express-validator';
import { validateDocuments } from '../middlewares/validate.documents';
import { getClientes, getCliente, postClientes, deleteClientes, putClientes } from '../controllers/clientes.controllers';

const router = Router();

router.get('/all', getClientes);

router.get('/getone', getCliente);

router.post('/add', [
    check('nombreCliente', 'Name invalid').not().isEmpty(),
    validateDocuments
], postClientes);

router.delete('/delete', deleteClientes);

router.put('/update', putClientes);

export default router;