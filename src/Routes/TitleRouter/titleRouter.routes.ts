import { Router } from "express";
import { TitleCreateHandleController } from "../../modules/title/useCase/createTitle/TitleCreateHandleController";

const routerTitle = Router();

const titleCreateHandleController = new TitleCreateHandleController();

routerTitle.post("/", titleCreateHandleController.handle);

export default routerTitle;
