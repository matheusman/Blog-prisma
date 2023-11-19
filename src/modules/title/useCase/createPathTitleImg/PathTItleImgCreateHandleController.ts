import { Request, Response } from "express";
import { PathTitleImgCreateHandle } from "./PathTitleImgCreateHandle";
import { checkInterface } from "../../../../interface/Generics";
import { IPath_title_img_Create } from "../../interface/IPath_title_img_Create";
import { AppError } from "../../../../error/AppError";

export class PathTitleImgCreateHandleController {
    async handle (req : Request, res : Response) {
        const pathTitleImg : IPath_title_img_Create = req.body
        if (!(checkInterface<IPath_title_img_Create>(pathTitleImg, 'alt_title', 'id_title', 'image_title'))) throw new AppError("Coloque todos os elementos corretos", 403)
        const titleCreateHandle = new PathTitleImgCreateHandle()
        return res.status(200).send(await titleCreateHandle.execute( pathTitleImg ))
    }

}