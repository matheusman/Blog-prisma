import { Router } from 'express';
import routerTitle from './TitleRouter/titleRouter.routes';
const router = Router();

router.use("/admin", routerTitle)

export default router