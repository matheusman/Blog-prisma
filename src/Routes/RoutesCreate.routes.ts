import { Router } from "express"; 
import { ListCreateHandleController } from "../modules/text/useCase/createList/ListHandleController";
import { MetaTagCreateHandleController } from "../modules/title/useCase/createMetaTag/MetaTagCreateHandleController";
import { ParagrafoCreateHandleController } from "../modules/text/useCase/createParagrafo/ParagrafoHandleController";
import { TitleCreateHandleController } from "../modules/title/useCase/createTitle/TitleCreateHandleController";
import { PathTitleImgCreateHandleController } from "../modules/title/useCase/createPathTitleImg/PathTItleImgCreateHandleController";
import { TextCreateHandleController } from "../modules/text/useCase/createText/TextHandleController";

const routerCreate = Router();

const titleCreateHandleController = new TitleCreateHandleController();
const pathTitleImgCreateHandleController = new PathTitleImgCreateHandleController();
const metaTagCreateHandleController = new MetaTagCreateHandleController();
const listCreateHandleController = new ListCreateHandleController();
const paragrafoCreateHandleController = new ParagrafoCreateHandleController();
const textCreateHandleController = new TextCreateHandleController();

routerCreate.post('/list', listCreateHandleController.handle)
routerCreate.post('/meta_tag', metaTagCreateHandleController.handle)
routerCreate.post('/paragrafo', paragrafoCreateHandleController.handle)
routerCreate.post('/text', textCreateHandleController.handle)
routerCreate.post('/path', pathTitleImgCreateHandleController.handle)
routerCreate.post('/title', titleCreateHandleController.handle)

export default routerCreate;