import { Router } from 'express';
import clientsController from '../controllers/clientController';

const router = Router();

router.get('/', clientsController.home);
router.get('/clients', clientsController.index);
router.get('/clients/create', clientsController.create);
router.post('/clients', clientsController.store);
router.get('/clients/:id', clientsController.show);
router.put('/clients/:id', clientsController.update);
router.get('/clients/:id/edit', clientsController.edit);
router.delete('/clients/:id', clientsController.destroy);

export default router;