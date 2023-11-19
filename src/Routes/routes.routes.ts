import { Router } from "express";
import routerCreate from "./RoutesCreate.routes";

const router = Router();

router.use('/create', routerCreate)

export default router;