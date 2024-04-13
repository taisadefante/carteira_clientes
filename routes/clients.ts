import { Router } from "express";
import clientsController from "../controllers/clientsController";

const router = Router();

router.get("/", clientsController.index);
router.get("/clients/:id", clientsController.show);

export default router;
